// promedios.js
async function loadPromedios() {
    const content = document.getElementById('content');
    content.innerHTML = '';
    const filters = getFilters();
    const params = new URLSearchParams(filters);
    const res = await fetch(`http://localhost:5000/promedios?${params}`);
    const data = await res.json();
  
    data.forEach(item => {
      item.PPS = parseFloat(item.PPS).toFixed(1);
    });
  
    const tableDiv = document.createElement('div');
    tableDiv.classList.add('table-container', 'w-1/3'); // Reducimos el tamaño de la tabla
    tableDiv.innerHTML = `
      <table class="min-w-full divide-y divide-gray-200 text-base">
        <thead>
          <tr>
            <th class="px-4 py-2 text-left text-gray-600 font-semibold">Localidad</th>
            <th class="px-4 py-2 text-right text-gray-600 font-semibold">PPS</th>
          </tr>
        </thead>
        <tbody>
          ${data.map(row => `
            <tr class="hover:bg-gray-100">
              <td class="border px-4 py-2">${row.LOCALIDAD}</td>
              <td class="border px-4 py-2 text-right">${row.PPS}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    `;
  
    const chartDiv = document.createElement('div');
    chartDiv.classList.add('chart-container', 'w-2/3'); // Más espacio para la gráfica
  
    const contentFlex = document.createElement('div');
    contentFlex.classList.add('flex', 'space-x-4', 'content-flex');
  
    contentFlex.appendChild(tableDiv);
    contentFlex.appendChild(chartDiv);
  
    content.appendChild(contentFlex);
  
    const options = {
      series: [{
        name: 'PPS',
        data: data.map(item => parseFloat(item.PPS)),
      }],
      chart: {
        type: 'bar',
        height: 350,
        foreColor: '#333',
      },
      title: {
        text: 'Promedio Ponderado Semestral por Localidad',
        style: {
          color: '#333',
        },
      },
      xaxis: {
        categories: data.map(item => item.LOCALIDAD),
        labels: {
          style: {
            colors: '#333',
          },
        },
      },
      yaxis: {
        max: 100,
        labels: {
          style: {
            colors: '#333',
          },
        },
      },
      dataLabels: {
        enabled: true,
        style: {
          colors: ['#333'],
        },
      }
    };
  
    const chart = new ApexCharts(chartDiv, options);
    chart.render();
  }
  