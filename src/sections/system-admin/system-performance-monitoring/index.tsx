import MemoryUtilisation from "./memory-utilisation/MemoryUtilisation";
import ServerDowntime from "./server-downtime/ServerDowntime";

export const usageTimeOptions = [
    {
        label: 'Last 30 mins',
        value: 'Care Act Advocacy'
    },
]
export const systemPerformanceTabs = [
    {
        index: 0,
        title: "Memory Utilisation",
        innerData: <MemoryUtilisation />
    },
    {
        index: 1,
        title: "Server Downtime",
        innerData: <ServerDowntime />

    },
];

