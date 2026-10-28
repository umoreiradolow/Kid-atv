// Continuidade com o quiz (index.html): quem chega com ?origem=quiz vê o cupom
// de R$ 26 aplicado; o parâmetro "foco" (resposta 2) personaliza o topo.
(function () {
  var p = new URLSearchParams(location.search);
  var fromQuiz = p.get('origem') === 'quiz';

  if (fromQuiz) {
    document.documentElement.classList.add('from-quiz');
    var bar = document.querySelector('.announcement');
    if (bar && bar.dataset.quiz) bar.textContent = bar.dataset.quiz;
    document.querySelectorAll('[data-quiz-only]').forEach(function (el) { el.hidden = false; });
  }

  var FOCO = {
    letras:  'Para a criança que ainda confunde as letras — com apenas 10 minutos por dia.',
    silabas: 'Para a criança que ainda não junta as sílabas — com apenas 10 minutos por dia.',
    leitura: 'Para a criança que lê devagar ou sem entender — com apenas 10 minutos por dia.',
    tarefa:  'Para a tarefa deixar de ser choro e virar descoberta — com apenas 10 minutos por dia.'
  };
  var lead = document.querySelector('.hero .lead');
  var foco = p.get('foco');
  if (lead && FOCO[foco]) lead.textContent = FOCO[foco];

  // Repassa UTMs e respostas ao checkout (o UTMify também cuida das UTMs).
  var keep = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term', 'fbclid', 'src', 'sck'];
  document.querySelectorAll('a[href*="pay.wiapy.com"]').forEach(function (a) {
    try {
      var u = new URL(a.href);
      keep.forEach(function (k) { if (p.get(k) && !u.searchParams.has(k)) u.searchParams.set(k, p.get(k)); });
      a.href = u.toString();
    } catch (e) {}
  });
})();
