//  task 1

const appointment = {
  patientName: "Анна",
  doctor: "Иванов Сергей Петрович",
  specialty: "терапевт",
  date: "2026-10-12",
  time: "15:30"
};

const [year, month, day] = appointment.date.split("-");
const formatDate = `${day}.${month}.${year}`;

const message =
    `${appointment.patientName}, вы записаны к врачу ` +
    `${appointment.doctor}, ${appointment.specialty}, ` +
    `на ${formatDate} в ${appointment.time}.`;

console.log(message);


//  task 2

const response = {
  success: true,
  appointments: [
    {
      id: "A-101",
      doctor: "Иванов",
      time: "10:00"
    },
    {
      id: "A-102",
      doctor: "Петров",
      time: "14:30"
    }
  ]
};

const result = response.appointments.map(
    appointment => `${appointment.doctor} - ${appointment.time}`
);

console.log(result);
