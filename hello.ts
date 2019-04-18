import {Grid, ColumnMovedEvent} from "ag-grid-community";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";

const eGridDiv: HTMLElement = <HTMLElement>document.querySelector('#myGrid');

new Grid(eGridDiv, {
  columnDefs: [
    {headerName: "Make", field: "make"},
    {headerName: "Model", field: "model"},
    {headerName: "Price", field: "price"}
  ],
  rowData: [
    {make: "Toyota", model: "Celica", price: 35000},
    {make: "Ford", model: "Mondeo", price: 32000},
    {make: "Porsche", model: "Boxter", price: 72000}
  ],
  onColumnMoved: (event: ColumnMovedEvent): void => {
    const state = event.columnApi.getColumnState()
    console.log("new state: ", state)
  }
});
