import React from "react";
import {Calendar, momentLocalizer} from "react-big-calendar";

//libreria para fechas y horas 
import moment from "moment";

import { Navbar } from "../ui/Navbar";

//importacion de la configuracion en español de los mensajes
import {messages} from "../../helpers/calendar-messages-es";

import "react-big-calendar/lib/css/react-big-calendar.css";

//importacion de idioma español
import "moment/locale/es";

const localizer = momentLocalizer(moment); // or globalizeLocalizer

//se define el idioma en español
moment.locale("es");

const events = [{
    title: "Cumpleaños de zafi",
    start: moment().toDate(), // new date
    end:  moment().add(2,"hours").toDate(), 
    bgcolor: "#fafafa"
}]

export const CalendarScreen = () => {
  return (
    <div className="calendar-screen">
      <Navbar />

      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        messages={messages}
      />
    </div>
  );
};
