/* Listen and Choose a Response: hear one line and pick the best reply, as in the TOEFL Listening task. */
(function () {
  'use strict';
  const TRAPS = [
    ['Same word, wrong meaning', 'A reply that repeats a word you heard ("The window is made of glass") is often wrong. Listen for what the speaker wants.'],
    ['Yes/no questions', 'A good reply to "Do you know if…" usually gives the information, not just yes or no.'],
    ['Requests and offers', '"Would you mind if…" is a request. "Not at all" means yes, go ahead.'],
    ['Negative questions', '"Didn\'t you say…" checks a belief. The answer often corrects or confirms it.'],
    ['Suggestions', '"Why don\'t we…" is a suggestion, not a question about reasons. Reply with agreement or another idea.'],
    ['Statements', 'When the speaker makes a statement, the best reply reacts to it: sympathy, help or a related point.'],
  ];
  const toItems = (bank) => bank.map((x) => ({ id: x.id, type: 'single', topic: 'Choose a response', stem: 'Choose the best response.', audio: { title: 'Listen to the speaker', text: x.say }, choices: x.choices, answer: x.answer, explanation: 'The speaker said: "' + x.say + '" The best reply is "' + x.choices[x.answer] + '".' }));
  const App = {
    about: 'In the TOEFL Listening task Listen and Choose a Response, you hear one line and choose the reply that fits. This app reads each line aloud with your computer\'s voices, then asks you to choose. The lines and replies were written for this suite.',
    how: ['Pick a voice and speed in **Voices**. A slower speed helps at first.',
      'In **Practice**, press Play, listen, then choose the reply. Try to answer after one listen, as on the test.',
      'Read **Traps** to learn the wrong-answer patterns that appear again and again.'],
    tabs: [
      { id: 'practice', label: 'Practice', render(el, ctx) {
        const bank = toItems(ctx.data.responses);
        SK.quizStarter(el, { title: 'Listen and choose', sizes: [8, 12, 24], make: (t, n, seed) => SK.sample(SK.rng(seed), bank, n).map((it) => SK.shuffleItem(SK.rng(seed + 1), it)), seconds: (n) => n * 25,
          intro: 'Each line is read aloud. In Test mode you can play it once.' });
      } },
      { id: 'voices', label: 'Voices', render(el) { el.appendChild(SK.card('Voices and speed', SK.h('p', { class: 'sk-muted', text: 'The app uses the voices installed on your computer. Choose two different voices so conversations are easy to follow.' }), SK.voicePicker())); } },
      { id: 'traps', label: 'Traps', render(el) { el.appendChild(SK.card('Common traps', SK.table(['Pattern', 'What to listen for'], TRAPS, false))); } },
    ],
    checks: {
      'every line has four different replies and one best answer': (data, assert) => {
        const items = toItems(data.responses);
        assert.ok(items.length >= 20);
        for (const it of items) { assert.deepEqual(SK.validateItem(it), []); assert.equal(it.choices.length, 4); }
      },
      'shuffled sets keep the right reply': (data, assert) => {
        const items = toItems(data.responses);
        for (let s = 1; s < 30; s++) for (const it of items) { const sh = SK.shuffleItem(SK.rng(s), it); assert.equal(sh.choices[sh.answer], it.choices[it.answer]); }
      },
    },
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = App; else SK.start(App);
})();
