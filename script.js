const steps = {
  observe: ['01 / 06', 'Observe the operating state', 'Unify property, inventory, prospect, channel, and lease signals at the grain where an operator can act.'],
  diagnose: ['02 / 06', 'Find the likely cause', 'Separate a symptom from its drivers, expose missing data, and declare how strong the evidence actually is.'],
  decide: ['03 / 06', 'Choose an intervention', 'Compare possible actions by expected outcome, urgency, confidence, and the cost of doing nothing.'],
  govern: ['04 / 06', 'Apply policy before action', 'Respect budget authority, Fair Housing constraints, reversibility, and the autonomy this decision class has earned.'],
  act: ['05 / 06', 'Execute with a receipt', 'Make the approved change once, verify it, preserve the before-state, and record a complete audit trail.'],
  learn: ['06 / 06', 'Return the outcome to memory', 'Compare expected with actual impact so the next recommendation, confidence estimate, and autonomy level improve.']
};

const controls = [...document.querySelectorAll('.loop-step')];
const index = document.querySelector('#detail-index');
const title = document.querySelector('#detail-title');
const copy = document.querySelector('#detail-copy');

controls.forEach((control) => {
  control.addEventListener('click', () => {
    const detail = steps[control.dataset.step];
    controls.forEach((item) => item.classList.remove('active'));
    control.classList.add('active');
    index.textContent = detail[0];
    title.textContent = detail[1];
    copy.textContent = detail[2];
  });
});

document.querySelector('#year').textContent = new Date().getFullYear();
