function displayLastSyncedDate() {
    var lastSynced = new Date();
    var lastSyncedString = lastSynced.toLocaleString();
    document.getElementById("last-synced").innerHTML = lastSyncedString;
}


// Define the unit status data
var unit_status_Data = [
    {UIC: "UIC1", Unit: "Unit1", Status: "Status1", Date: "Last"},
    {UIC: "UIC2", Unit: "Unit2", Status: "Status2", Date: "Date2"},
    {UIC: "UIC3", Unit: "Unit3", Status: "Status3", Date: "Date3"},
    {UIC: "UIC4", Unit: "Unit4", Status: "Status4", Date: "Date4"},
    {UIC: "UIC5", Unit: "Unit5", Status: "Status5", Date: "Date5"},
    {UIC: "UIC6", Unit: "Unit6", Status: "Status6", Date: "Date6"},
    {UIC: "UIC7", Unit: "Unit7", Status: "Status7", Date: "Date7"},
    {UIC: "UIC8", Unit: "Unit8", Status: "Status8", Date: "Date8"},
    {UIC: "UIC9", Unit: "Unit9", Status: "Status9", Date: "Date9"},
    {UIC: "UIC10", Unit: "Unit10", Status: "Status10", Date: "Date10"}
];

// Define the table element
var table = document.getElementById("table");

// Populate the table with the unit status data
for (var i = 0; i < unit_status_Data.length; i++) {
    var row = `<tr>
                <td>${unit_status_Data[i].UIC}</td>
                <td>${unit_status_Data[i].Unit}</td>
                <td>${unit_status_Data[i].Status}</td>
                <td>${unit_status_Data[i].Date}</td>
            </tr>`
    table.innerHTML += row;
}

// Define the filter button
const filterButton = document.getElementById("filter-button");

// Add an event listener to the filter button
filterButton.addEventListener("select", function() {
    // Update the table based on the filter
    updateTable();
});

// Define the filter dropdowns
const documentFilter = document.getElementById("document-filter");
const dateFilter = document.getElementById("date-filter");

// Define the table body
const tableBody = document.querySelector("table tbody");

// Add an event listener to both filter dropdowns
documentFilter.addEventListener("change", updateTable);
dateFilter.addEventListener("change", updateTable);

// Define the updateTable function
function updateTable() {
    // Get the selected values from the filter dropdowns
    const documentValue = documentFilter.value;
    const dateValue = dateFilter.value;

    // Filter the table rows based on the selected values
    const filteredRows = Array.from(tableBody.children).filter(row => {
        const documentCell = row.children.item(0);
        const dateCell = row.children.item(3);

        // Check if the document value matches the row's document value
        const documentMatch = documentValue === "" || documentCell.innerHTML === documentValue;

        // Check if the date value matches the row's date value
        const dateMatch = dateValue === "" || dateCell.innerHTML === dateValue;

        // Return true if both the document and date values match
        return documentMatch && dateMatch;
    });

    // Hide all table rows
    Array.from(tableBody.children).forEach(row => {
        row.style.display = "none";
    });

    // Show the filtered rows
    filteredRows.forEach(row => {
        row.style
    })
}
// Get unique values from the filters

let filteredRows = "";
for (let i = 0; i < data.length; i++) {
const row = data[i];
if (
    (documentFilter === "" || row.document === documentFilter) &&
    (dateFilter === "" || new Date(row.lastModified).toDateString() === dateFilter)
) {
    filteredRows += `<tr>
    <td>${row.document}</td>
    <td>${new Date(row.lastModified).toUTCString()}</td>
    <td>${row.status}</td>
    </tr>`;
}
}
table.innerHTML = filteredRows;

const stream_1 = document.getElementById("stream-1");
const stream_2 = document.getElementById("stream-2");

setTimeout(updateStream(stream_2), 100000);


function updateStream(stream) {
    stream.innerHTML = "";
}

window.onload = displayLastSyncedDate();{
    var lastSynced = new Date();
    var lastSyncedString = lastSynced.toLocaleString();
    document.getElementById("last-synced").innerHTML = lastSyncedString;
    };


