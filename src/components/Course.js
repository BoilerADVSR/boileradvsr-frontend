import React from "react";

export default function Course({ title, number, creditHours}) {
    return (<div>
      <div>
        <p>Title: {title}</p>
        <p>Number: {number}</p>
        <p>Credits: {creditHours}</p>
      </div>
    </div>)
};