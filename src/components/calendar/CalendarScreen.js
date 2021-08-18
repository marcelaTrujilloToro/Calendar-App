import React, { useState } from "react";
import {useDispatch} from 'react-redux'
import {Calendar, momentLocalizer} from "react-big-calendar";

//libreria para fechas y horas 
import moment from "moment";

import { Navbar } from "../ui/Navbar";

//importacion de la configuracion en español de los mensajes
import {messages} from "../../helpers/calendar-messages-es";

import "react-big-calendar/lib/css/react-big-calendar.css";

//importacion de idioma español
import "moment/locale/es";
import { CalendarEvent } from "./CalendarEvent";
import { CalendarModal } from "./CalendarModal";
import { uiOpenModal } from "../../actions/ui";
import {eventSetActive} from "../../actions/events";
import { AddNewFab } from "../ui/AddNewFab";

const localizer = momentLocalizer(moment); // or globalizeLocalizer

//se define el idioma en español
moment.locale("es");

const events = [{
    title: "Curso de react",
    start: moment().toDate(), // new date
    end:  moment().add(2,"hours").toDate(), 
    bgcolor: "#fafafa",
    user: {
        _id: "123",
        name: "Marcela"
    }
}]

export const CalendarScreen = () => {

    const dispatch = useDispatch();

    const [lastView, setLastView] = useState(localStorage.getItem("lastView") || "month");

    const onDoubleClick = (e) => {
        dispatch(uiOpenModal());
    };
    
    const onSelectEvent= (e) => {
        dispatch(eventSetActive(e));
        dispatch(uiOpenModal());
        
    };
    
    const onViewChange= (e) => {
        setLastView(e);
        localStorage.setItem("lastView", e);
    };

   


    const eventStyleGetter = (event, start, end, isSelected) => {

        const style= {
            backgroundColor: "#367CF7",
            borderRadius: "0px",
            opacity: 0.8,
            display: "block",
            color: "white"
        }
        return{
            style
        }
        
    };


  return (
    <div className="calendar-screen">
      <Navbar />

      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        messages={messages}
        eventPropGetter={eventStyleGetter}
        onDoubleClickEvent={onDoubleClick}
        onSelectEvent={onSelectEvent}
        onView={onViewChange}
        view={lastView}
        components={{
            event: CalendarEvent
        }}
      />

      <AddNewFab/>

      <CalendarModal/>


    </div>
  );
};
