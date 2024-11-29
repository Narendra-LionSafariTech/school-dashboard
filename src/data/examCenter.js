export const examCenters = [
    ...Array.from({ length: 105 }, (_, index) => ({
        sNo: index + 1,
        centerCode: `CEN${String(index + 1).padStart(4, "0")}`,
        centerName: `Exam Center ${index + 1}`,
        examDate: `2024-${String((index % 12) + 1).padStart(2, "0")}-${String((index % 28) + 1).padStart(2, "0")}T00:00:00.000Z`,
        shiftTime: `${String((index % 12) + 8).padStart(2, "0")}:00 - ${String((index % 12) + 9).padStart(2, "0")}:00`,
        totalCandidates: 200 + (index % 100),
        verificationDetails: {
            present: 180 + (index % 20),
            absent: 20 - (index % 20),
        },
        centerStatus: index % 3 === 0 ? "Completed" : index % 3 === 1 ? "Ongoing" : "Scheduled",
    })),
];
