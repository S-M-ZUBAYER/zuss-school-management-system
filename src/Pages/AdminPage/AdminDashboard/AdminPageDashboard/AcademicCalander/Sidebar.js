import React from "react";
import CreateEventButton from "./CreateEventButton";
import SmallCalendar from "../AcademicCalander/SmallCalendar";
import Labels from "../AcademicCalander/Labels";
export default function Sidebar() {
    return (
        <aside className="border p-5 w-64">
            <CreateEventButton />
            <SmallCalendar />
            <Labels />
        </aside>
    );
}
