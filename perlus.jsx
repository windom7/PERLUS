import React from 'react';
import './PerlusMock.css';

function PerlusMock() {

function displayLastSyncedDate() {
    var lastSynced = new Date();
    var lastSyncedString = lastSynced.toLocaleString();
    document.getElementById("last-synced").innerHTML = lastSyncedString;
}

return (
    <div>
    <header>
        <h1>Dashboard Mock-Up</h1>
    </header>
    <nav>
        <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Analytics</a></li>
        <li><a href="#">Settings</a></li>
        </ul>
    </nav>
    <main>
        <section>
        <h2>Analytics Overview</h2>
        <p>Here is a summary of your analytics data.</p>
        <ul>
            <li>Users: 1,000</li>
            <li>DSR Sync Sessions: 10,000</li>
            <li>Page Discrepancies: 50,000</li>
        </ul>
        </section>
        <section>
        <h2>Document Sync Dashboard</h2>
        <p>Last synced on: <span id="last-synced"></span></p>
        <div className="filters">
            <label htmlFor="document-filter">Filter by document:</label>
            <select id="document-filter">
            <option value="all-doc">All documents</option>
            <option value="UIC">UIC</option>
            <option value="UNIT">UNIT</option>
            <option value="STAT">STATUS</option>
            <option value="D/T">Date/Time</option>
            </select>

            <label htmlFor="date-filter">Filter by date:</label>
            <select id="date-filter">
            <option value="">All dates</option>
            <option value="UIC1">March 23, 2023</option>
            <option value="march-24">March 24, 2023</option>
            <option value="march-25">March 25, 2023</option>
            <option value="march-26">March 26, 2023</option>
            <option value="march-27">March 27, 2023</option>
            </select>
        </div>
        <table id="table">
            <thead>
            <tr>
                <th>UIC</th>
                <th>UNIT</th>
                <th>STATUS</th>
                <th>DATE/TIME</th>
            </tr>
            </thead>
            <tbody>
              {/* Your table rows go here */}
            </tbody>
        </table>
        <div id="stream-1" className="stream_text"></div>
        <div id="stream-2" className="stream_text stream_text-delay"></div>
        </section>
    </main>
    <footer>
        <div id="stream-1" className="stream_text"></div>
        <div id="stream-2" className="stream_text stream_text-delay"></div>
        <p>.</p>
    </footer>
    </div>
);
}
import React, { useState, useEffect } from 'react';

function PerlusMock() {

    const [lastSyncedDate, setLastSyncedDate] = useState(new Date());
    const [unitStatusData, setUnitStatusData] = useState([
        { UIC: "UIC1", Unit: "Unit1", Status: "Status1", Date: "Last" },
        { UIC: "UIC2", Unit: "Unit2", Status: "Status2", Date: "Date2" },
        { UIC: "UIC3", Unit: "Unit3", Status: "Status3", Date: "Date3" },
        { UIC: "UIC4", Unit: "Unit4", Status: "Status4", Date: "Date4" },
        { UIC: "UIC5", Unit: "Unit5", Status: "Status5", Date: "Date5" },
        { UIC: "UIC6", Unit: "Unit6", Status: "Status6", Date: "Date6" },
        { UIC: "UIC7", Unit: "Unit7", Status: "Status7", Date: "Date7" },
        { UIC: "UIC8", Unit: "Unit8", Status: "Status8", Date: "Date8" },
        { UIC: "UIC9", Unit: "Unit9", Status: "Status9", Date: "Date9" },
        { UIC: "UIC10", Unit: "Unit10", Status: "Status10", Date: "Date10" }
    ]);

}

useEffect(() => {
    const interval = setInterval(() => {
    updateStream(stream_2);
    }, 100000);
    return () => clearInterval(interval);
}, []);

function displayLastSyncedDate() {
    const date = new Date();
    setLastSyncedDate(date);
}

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
    row.style.display = "";
    });
}

function updateStream(stream) {
    stream.innerHTML = "";
}

export default PerlusMock;
