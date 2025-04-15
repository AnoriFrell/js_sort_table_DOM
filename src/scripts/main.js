'use strict';

// write code here
const headerParams = document.querySelectorAll('thead th');
// const employees = document.querySelectorAll('tbody tr');
const table = document.querySelector('tbody');
const rows = table.querySelectorAll('tr');
let isAscending = true;

headerParams.forEach((param) => {
  param.addEventListener('click', (ev) => {
    sorting(ev, isAscending);
    isAscending = !isAscending;
  });
});

function sorting(ev, asc) {
  const targetIndex = [...headerParams].indexOf(ev.target);

  const sortedRows = [...rows].sort((a, b) => {
    const aValue = a.children[targetIndex].innerText;
    const bValue = b.children[targetIndex].innerText;

    const aNum = parseFloat(aValue.replace(/[^0-9.-]+/g, ''));
    const bNum = parseFloat(bValue.replace(/[^0-9.-]+/g, ''));

    if (!isNaN(aNum) || !isNaN(bNum)) {
      return asc ? aNum - bNum : bNum - aNum;
    } else {
      return asc ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue);
    }
  });

  table.append(...sortedRows);
}

// const ascSorted = [...employees].sort((a, b) => {
//   const aValue = a.children[targetIndex].innerText;
//   const bValue = b.children[targetIndex].innerText;

//   if (isNaN(+aValue)) {
//     return aValue.localeCompare(bValue);
//   } else {
//     return (
//       parseFloat(aValue.replace(/[^0-9.-]+/g, '')) -
//       parseFloat(bValue.replace(/[^0-9.-]+/g, ''))
//     );
//   }
// });

// document.querySelector('tbody').append(...ascSorted);
