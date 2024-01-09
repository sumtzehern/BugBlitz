/*
  This file (tickets.json) serves as a local storage for storing ticket details.
  For the current implementation, data is stored locally, but in future iterations,
  consider transitioning to a backend server for improved scalability and data management.
*/

const KEYS = {
    tickets: "tickets",
    ticketsID: "ticketsID",
  };
  
  /* This function store the id for the ticketForm*/
  export const getTicketCollection = () => [
    { id: "1", title: "Title" },
    { id: "2", title: "Description" },
    { id: "3", title: "Time" },
    { id: "4", title: "Priority" },
    { id: "5", title: "Type" },
    { id: "6", title: "Date" },
  ];
  
  export function insertTicket(data) {
    return new Promise((resolve) => {
      let tickets = getAllTicket();
      data['id'] = generateTicketsID();
      tickets.push(data);
      localStorage.setItem(KEYS.tickets, JSON.stringify(tickets));
      resolve();
    });
  }
  
  export function generateTicketsID() {
    if (localStorage.getItem(KEYS.ticketsID) == null)
      localStorage.setItem(KEYS.ticketsID, "0");
    var id = parseInt(localStorage.getItem(KEYS.ticketsID));
    localStorage.setItem(KEYS.ticketsID, (++id).toString());
    return id;
  }
  
  export function getAllTicket() {
    if (localStorage.getItem(KEYS.tickets) == null)
      localStorage.setItem(KEYS.tickets, JSON.stringify([]));
    return JSON.parse(localStorage.getItem(KEYS.tickets));
  }
  