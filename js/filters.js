let facultades = [];
let carreras = [];
let periodos = [];
let selectedFacultad = 'Todas';
let selectedCarrera = 'Todas';
let selectedPeriodo = '';

async function fetchFilters() {
  const resFacultades = await fetch('http://localhost:5000/facultades');
  facultades = await resFacultades.json();
  facultades.unshift('Todas');

  const resCarreras = await fetch('http://localhost:5000/carreras');
  carreras = await resCarreras.json();
  carreras.unshift('Todas');

  const resPeriodos = await fetch('http://localhost:5000/periodos');
  periodos = await resPeriodos.json();

  renderFilters();
}

function renderFilters() {
  const filtersDiv = document.getElementById('filters');
  filtersDiv.innerHTML = `
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div>
        <label class="block text-sm font-medium text-gray-700">Seleccionar Facultad</label>
        <select id="facultad-filter" class="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
          ${facultades.map(facultad => `<option value="${facultad}">${facultad}</option>`).join('')}
        </select>
      </div>
      <div>
        <label class="block text-sm font-medium text-gray-700">Seleccionar Carrera</label>
        <select id="carrera-filter" class="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
          ${carreras.map(carrera => `<option value="${carrera}">${carrera}</option>`).join('')}
        </select>
      </div>
      <div>
        <label class="block text-sm font-medium text-gray-700">Seleccionar Periodo</label>
        <select id="periodo-filter" class="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
          ${periodos.map(periodo => `<option value="${periodo}">${periodo}</option>`).join('')}
        </select>
      </div>
    </div>
  `;

  document.getElementById('facultad-filter').addEventListener('change', (e) => {
    selectedFacultad = e.target.value;
    reloadContent();
  });

  document.getElementById('carrera-filter').addEventListener('change', (e) => {
    selectedCarrera = e.target.value;
    reloadContent();
  });

  document.getElementById('periodo-filter').addEventListener('change', (e) => {
    selectedPeriodo = e.target.value;
    reloadContent();
  });
}

function getFilters() {
  return {
    facultad: selectedFacultad,
    carrera: selectedCarrera,
    periodo: selectedPeriodo,
  };
}

function reloadContent() {
  const activeTab = document.querySelector('.tab.border-b-2').dataset.tab;
  switch (activeTab) {
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

fetchFilters();
