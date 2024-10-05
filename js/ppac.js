async function loadPPAC() {
  const content = document.getElementById('content');
  content.innerHTML = '';
  const filters = getFilters();
  const params = new URLSearchParams(filters);
  const res = await fetch(`http://localhost:5000/ppac?${params}`);
  const data = await res.json();

  // Format numbers to have at most one decimal
  data.forEach(item => {
    item.PPAC = parseFloat(item.PPAC).toFixed(1);
  });

  const tableDiv = document.createElement('div');
  tableDiv.classList.add('table-container');
  tableDiv.innerHTML = `
    <table class="min-w-full divide-y divide-gray-200 text-base">
      <thead>
        <tr>
          <th class="px-4 py-2 text-left text-gray-600 font-semibold">Localidad</th>
          <th class="px-4 py-2 text-right text-gray-600 font-semibold">PPAC</th>
        </tr>
      </thead>
      <tbody>
        ${data.map(row => `
          <tr class="hover:bg-gray-100">
            <td class="border px-4 py-2">${row.LOCALIDAD}</td>
            <td class="border px-4 py-2 text-right">${row.PPAC}</td>
          </tr>
        `).join('')}
      </tbody>
    </table>
  `;

  const chartDiv = document.createElement('div');
  chartDiv.classList.add('chart-container');

  const contentFlex = document.createElement('div');
  contentFlex.classList.add('flex', 'space-x-4', 'content-flex');

  contentFlex.appendChild(tableDiv);
  contentFlex.appendChild(chartDiv);

  content.appendChild(contentFlex);

  const options = {
    series: [{
      name: 'PPAC',
      data: data.map(item => parseFloat(item.PPAC)),
    }],
    chart: {
      type: 'bar',
      height: 350,
      foreColor: '#333',
    },
    title: {
      text: 'PPAC por Localidad',
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
      labels: {
        style: {
          colors: '#333',
        },
      },
    },
  };

  const chart = new ApexCharts(chartDiv, options);
  chart.render();
}
