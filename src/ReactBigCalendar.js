import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import { LeftOutlined, RightOutlined } from '@ant-design/icons'
import { Button, Tooltip } from "antd";
import moment from "moment";
import 'moment/locale/zh-cn'
import "react-big-calendar/lib/css/react-big-calendar.css";
import './style.css';
import _ from 'lodash';

moment.locale('zh-cn', { week: { dow: 0 } })
const localizer = momentLocalizer(moment);

export default function ReactBigCalendar() {
  const [eventsData, setEventsData] = useState([]);
  const [currentView, setView] = useState('month');
  const [currentDate, setDate] = useState(moment().toDate());

  const handleSelect = ({ start, end }) => {
    if(currentView === 'month') end = moment(Date.parse(end)).endOf('day').toDate(); 
    const title = window.prompt(`New Event name start:${moment(Date.parse(start)).format('YYYY-MM-DD HH:mm:ss')}, end:${moment(Date.parse(end)).format('YYYY-MM-DD HH:mm:ss')}`);
    if (title)
      setEventsData([
        ...eventsData,
        {
          start,
          end,
          title
        }
      ]);
  };

  const CalendarToolbar = ({ onView }) => {
    const views = { day: '日', week: '周', month: '月' }
    const currentMoment = moment(Date.parse(currentDate));
    return <div style={{ display: 'flex', justifyContent: 'space-between', margin: '16px 0' }}>
      <div className="d-flex justify-content-between align-items-center">
        <Button style={{ borderRadius: 8, border: '1px solid rgba(217, 217, 217, 1)', marginRight: 24, width: 64, height: 40 }}
          onClick={() => setDate(moment().toDate())}
        >
          今天
        </Button>
        <Button className="date-pre" icon={<LeftOutlined />}
          onClick={() => {
            let timestamp = Date.parse(currentDate)
            setDate(moment(timestamp).clone().add('day', -1).toDate())
          }}
        />
        <Button className="date-next" icon={<RightOutlined />}
          onClick={() => {
            let timestamp = Date.parse(currentDate)
            setDate(moment(timestamp).clone().add('day', 1).toDate())
          }}
        />
        <span className="date-show">{currentView === 'day' ? currentMoment.format('YYYY年MM月DD日') : currentMoment.format('YYYY年  MM月')}</span>
      </div>
      <div className="d-flex date-group">
        {
          _.map(Object.keys(views), p => {
            return <div
              key={p}
              className={`date-group-item d-flex justify-content-center align-items-center ${currentView === p ? 'active-item' : ''}`}
              onClick={() => { setView(p); onView(p); }}>
              {views[p]}
            </div>
          })
        }
      </div>
    </div>
  };

  const CustomEvent = (value) => {
    return <div className={''} style={{ display: 'flex', flexDirection: 'row', alignContent: 'center', alignItems: "center" }}>
      {currentView === 'month' && <div className="item-left"></div>}
      {currentView !== 'month' && <div className="item-nonMonth" style={{ height: '100%', position: 'absolute', top: 0, left: 0 }}></div>}
      <Tooltip title={value.title}>
        <div style={{ marginLeft: currentView !== 'month' ? 10 : 0 }}>{value.title}</div>
      </Tooltip>
    </div>
  }

  return (
    <div className="App">
      <Calendar
        defaultView={currentView}
        selectable
        localizer={localizer}
        date={currentDate}
        events={eventsData}
        style={{ height: "100vh" }}
        onSelectEvent={(event) => alert(JSON.stringify(event))}
        onSelectSlot={handleSelect}
        components={{
          toolbar: CalendarToolbar,
          event: CustomEvent
        }}
      />
    </div>
  );
}