// Exercise the exact guide controller without adding browser dependencies.
const {test} = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const page = fs.readFileSync(path.join(__dirname,'..','index.html'),'utf8');
const topicIds = ['start','import','diagram','human','exceptions','ai','model','training'];
const begin = page.indexOf('/* Guide topic navigation.');
const end = page.indexOf('/* App-level navigation',begin);
assert.ok(begin>=0 && end>begin);

function controller(language='en'){
  const guides = ['en','ro'].map(lang=>{
    const content = {scrollTop:180};
    const tabs = topicIds.map(topic=>({dataset:{guideTopic:topic},tabIndex:99,attrs:{},focused:false,
      setAttribute(k,v){this.attrs[k]=v;},focus(){this.focused=true;}}));
    const panels = topicIds.map(topic=>({dataset:{guidePanel:topic},hidden:false}));
    return {dataset:{lang},tabs,panels,content,querySelectorAll(selector){
      return selector==='[role="tab"]'?tabs:panels;
    },querySelector(){return content;}};
  });
  const document = {querySelectorAll(selector){return selector==='.guide'?guides:[];}};
  const api = new Function('document','LANG',page.slice(begin,end)+
    '\nreturn {GUIDE_TOPICS,guideTopicForKey,selectGuideTopic,get selected(){return guideTopic;}};')(document,language);
  return {api,guides};
}

test('both guide languages have eight linked tabs/panels and Start here initially active',()=>{
  const ids = [...page.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]);
  assert.equal(ids.length,new Set(ids).size,'IDs must be unique');
  for(const lang of ['en','ro']) for(const topic of topicIds){
    const button=page.match(new RegExp(`<button[^>]*id="guide-tab-${lang}-${topic}"[^>]*>`));
    const panel=page.match(new RegExp(`<section[^>]*id="guide-panel-${lang}-${topic}"[^>]*>`));
    assert.ok(button && panel,`${lang}/${topic}`);
    assert.match(button[0],new RegExp(`aria-controls="guide-panel-${lang}-${topic}"`));
    assert.match(panel[0],new RegExp(`aria-labelledby="guide-tab-${lang}-${topic}"`));
    assert.match(button[0],new RegExp(`aria-selected="${topic==='start'}"`));
    assert.equal(/\bhidden\b/.test(panel[0]),topic!=='start');
  }
  assert.equal((page.match(/role="tablist"/g)||[]).length,2);
  assert.equal((page.match(/<table class="guide-files">/g)||[]).length,2);
  assert.match(page,/\.guide \.guide-files th:first-child,\.guide \.guide-files td:first-child\{\s*width:96px;min-width:96px;white-space:nowrap/);
});

test('Coming next content is removed rather than merely hidden',()=>{
  const guide=page.slice(page.indexOf('<!-- ================= GUIDE'),page.indexOf('</main>'));
  assert.doesNotMatch(guide,/Coming next|Timing capture|Confirmed exception pairing|Model editor/);
  assert.equal((guide.match(/role="tabpanel"/g)||[]).length,16);
});

test('topic selection shows one panel and one keyboard tab stop in each language',()=>{
  const {api,guides}=controller();
  assert.deepEqual(api.GUIDE_TOPICS,topicIds);
  for(const topic of topicIds){
    assert.equal(api.selectGuideTopic(topic),true);
    assert.equal(api.selected,topic);
    for(const g of guides){
      assert.deepEqual(g.panels.filter(p=>!p.hidden).map(p=>p.dataset.guidePanel),[topic]);
      assert.deepEqual(g.tabs.filter(t=>t.attrs['aria-selected']==='true').map(t=>t.dataset.guideTopic),[topic]);
      assert.deepEqual(g.tabs.filter(t=>t.tabIndex===0).map(t=>t.dataset.guideTopic),[topic]);
    }
  }
});

test('selection resets scroll only when changing topic and rejects unknown topics',()=>{
  const {api,guides}=controller();
  api.selectGuideTopic('start');
  assert.equal(guides[0].content.scrollTop,180);
  api.selectGuideTopic('ai');
  assert.equal(guides[0].content.scrollTop,0);
  guides[0].content.scrollTop=90;
  api.selectGuideTopic('ai');
  assert.equal(guides[0].content.scrollTop,90);
  assert.equal(api.selectGuideTopic('missing'),false);
  assert.equal(api.selected,'ai');
});

test('keys wrap, support Home/End and focus only the current language',()=>{
  const {api,guides}=controller('ro');
  assert.equal(api.guideTopicForKey('start','ArrowLeft'),'training');
  assert.equal(api.guideTopicForKey('training','ArrowRight'),'start');
  assert.equal(api.guideTopicForKey('ai','Home'),'start');
  assert.equal(api.guideTopicForKey('ai','End'),'training');
  assert.equal(api.guideTopicForKey('ai','ArrowRight'),'model');
  assert.equal(api.guideTopicForKey('ai','Tab'),null);
  assert.equal(api.guideTopicForKey('missing','ArrowRight'),null);
  api.selectGuideTopic('model',true);
  assert.equal(guides[0].tabs.some(t=>t.focused),false);
  assert.equal(guides[1].tabs.find(t=>t.dataset.guideTopic==='model').focused,true);
});

test('language refresh preserves the topic and simulator shortcuts do not run in the guide',()=>{
  const applyLang=page.slice(page.indexOf('function applyLang()'),page.indexOf("$('selLang').addEventListener"));
  assert.match(applyLang,/selectGuideTopic\(guideTopic\)/);
  const shortcut=page.slice(page.indexOf("document.addEventListener('keydown'"),page.indexOf('10. PARSERS'));
  assert.match(shortcut,/!\$\('view-sim'\)\.classList\.contains\('on'\)/);
  assert.match(shortcut,/e\.defaultPrevented/);
  assert.match(shortcut,/closest\('input,select,textarea,button/);
});
