import OngoingEvent from './ongoing-event/OngoingEvent'
import FutureEvents from './future-events/FutureEvents'
import EventHistory from './event-history/EventHistory'
export const data = [
    {
      title: "Ongoing Event",
      component: <OngoingEvent />
    },
    {
      title: "Future Events",
      component: <FutureEvents />
    },
    {
      title: "Event History",
      component: <EventHistory />
    },
  ]
