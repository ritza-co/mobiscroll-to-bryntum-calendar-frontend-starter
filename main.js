import { Calendar, CrudManager } from "@bryntum/calendar";
import "@bryntum/calendar/calendar.stockholm.css";

const crudManager = new CrudManager({
  transport: {
    load: {
      url: "http://localhost:1338/load",
    },
    sync: {
      url: "http://localhost:1338/sync",
    },
  },
  autoLoad: true,
  autoSync: true,
});

const calendar = new Calendar({
  appendTo: document.body,
  date: new Date(2023, 6, 25),
  crudManager,
  features: {
    scheduleMenu: {
      items: {
        addEvent: false,
      },
    },
  },
});
