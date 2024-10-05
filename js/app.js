// app.js
document.addEventListener('DOMContentLoaded', function () {
    const tabs = document.querySelectorAll('.tab');
    const content = document.getElementById('content');
    let activeTab = 'Inscritos';
  
    function loadTab(tabName) {
      activeTab = tabName;
      tabs.forEach(tab => {
        if (tab.dataset.tab === tabName) {
          tab.classList.add('border-b-2', 'border-blue-500', 'text-blue-500');
        } else {
          tab.classList.remove('border-b-2', 'border-blue-500', 'text-blue-500');
        }
      });
      switch (tabName) {
        case 'Inscritos':
          loadInscritos();
          break;
        case 'Rendimiento':
          loadRendimiento();
          break;
        case 'Promedios':
          loadPromedios();
          break;
        case 'NuevosInscritos':
          loadNuevosInscritos();
          break;
        case 'Egresados':
          loadEgresados();
          break;
        case 'Desercion':
          loadDesercion();
          break;
        case 'PPAC':
          loadPPAC();
          break;
        default:
          break;
      }
    }
  
    tabs.forEach(tab => {
      tab.addEventListener('click', () => loadTab(tab.dataset.tab));
    });
  
    loadTab(activeTab);
  });
  