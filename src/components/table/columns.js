import { createColumnHelper } from '@tanstack/react-table'
//import { TableCell } from './TableCell'
import TableCell from './TableCell'
//import { Student } from './types'
//import { EditCell } from './EditCell'
import EditCell from './EditCell'
// refer to  sieh,Abschnitt 6 Behördliche
/* Überwachung von Anbauvereinigungen § 26 Dokumentations- und Berichtspflichten
  von Anbauvereinigungen in{' '}
  https://www.recht.bund.de/bgbl/1/2024/109/regelungstext.pdf?__blob=publicationFile&v=2"
    Bundesgesetzblatt 
    
  Same layout as for § 26 Dokumentations- und Berichtspflichten von Anbauvereinigungen  
  with (1).x ...
    */
const columsAccessors = {
  1: {
    // erhaltenden Vermehrungsmaterial
    /**
     * 1. Name, Vorname und Anschrift jeder Person, Name und Sitz jeder Anbauvereinigung oder Name und Sitz jeder
        juristischen Person, von der sie Vermehrungsmaterial erhalten haben
     */
    1: {
      personen: ['Name', 'Vorname', 'Anschrift'],
      anbauvereinigung: ['Name', 'Sitz'],
      juristischen: ['Name', 'Sitz'], // juristischen Personen
    },

    // mengen Cannabis im Gramm und Stückzahl Vermehrungsmaterial im Besitzum
    /**
     * 2. Mengen an Cannabis in Gramm und Stückzahl des Vermehrungsmaterials, die sich in oder auf ihrem befriedeten
      Besitztum befinden,
     * 
     */
    2: {
      mengen: ['Gramm', 'Stückzahl'],
    },

    // 3. mengen angebauten Cannabis im Gramm /
    3: {
      mengen: ['Gramm'],
    },

    // 4. mengen vernichteten Cannabis in Gramm und Stückzahl des vernichteten Vermehrungsmaterials
    4: {
      mengen: ['Gramm', 'Stückzahl'],
    },

    //5. Mitglied identifikation und mengen an weitergegebenene Cannabis
    /*
      Name, Vorname und Geburtsjahr jedes Mitglieds, an das Cannabis weitergegeben wurde, sowie die folgenden
      Angaben zu dem weitergegebenen Cannabis:
      a) Menge in Gramm,
      b) durchschnittlicher THC-Gehalt,
      c) Datum der Weitergabe,
    */

    5: {
      mitglied: ['Name,', 'Vorname', 'Geburtsjahr', 'Menge', 'THC-Gehalt', 'Datum'],
    },

    // Mitglied identifikation und mengen an weitergegebenene Vermehrungsmaterial
    /**
     * 6. Name, Vorname und Geburtsjahr jedes Mitglieds, an das Vermehrungsmaterial weitergegeben wurde, sowie
          folgende Angaben zu dem weitergegebenen Vermehrungsmaterial:
          a) Stückzahl des weitergegebenen Vermehrungsmaterials,
          b) Datum der Weitergabe und
     */
    6: {
      mitglied: ['Name,', 'Vorname', 'Geburtsjahr', 'Menge', 'Datum'],
    },

    /**
      * 7. Mengen in Gramm und Sorten des gemäß § 22 Absatz 3 transportierten Cannabis, Name und Vorname des
        jeweils den Transport durchführenden oder begleitenden Mitglieds sowie Datum, Start- und Zieladresse des
        jeweiligen Transports.
      * 
      * § 22 Absatz 3:
      * 3. die Anbauvereinigung das Datum, die Start- und Zieladresse des Transports sowie die Mengen in Gramm und
        Sorten des transportierten Cannabis spätestens einen Werktag vor Beginn des Transports gegenüber der
        zuständigen Behörde schriftlich oder elektronisch anzeigt, 
      *  */
    7: {
      transport: ['Datum,', 'Start', 'Ziel', 'Menge', 'Name', 'Vorname'],
    },
    /**
     * Bei der Weitergabe von Vermehrungsmaterial an die in § 20 Absatz 1 Satz 1 Nummer 2 genannten Personen haben
      die Anbauvereinigungen abweichend von Satz 1 Nummer 6 nur die Stückzahl und das Datum der Weitergabe zu
      dokumentieren.
     * 
     */

    8: {
      vermehrungsmaterial_no_members: ['Datum,', 'Menge'],
    },
  },

  3: '',
}

const columnHelper = createColumnHelper()

export const columns = [
  columnHelper.accessor('studentNumber', {
    header: 'Student Id',
    cell: TableCell,
    meta: {
      type: 'number',
      filterVariant: 'range',
    },
  }),
  columnHelper.accessor('name', {
    header: 'Full Name',
    cell: TableCell,
    meta: {
      type: 'text',
      required: true,
      pattern: '^[a-zA-Z ]+$',
      filterVariant: 'range',
    },
  }),
  columnHelper.accessor('dateOfBirth', {
    header: 'Date Of Birth',
    cell: TableCell,
    meta: {
      type: 'date',
      filterVariant: 'range',
      required: true,
      validate: (value) => {
        const date = new Date(value)
        const today = new Date()
        return date <= today
      },
      validationMessage: 'Date cannot be in the future',
    },
  }),
  columnHelper.accessor('major', {
    header: 'Major',
    cell: TableCell,
    meta: {
      type: 'select',
      filterVariant: 'select',
      options: [
        { value: '', label: 'Select' },
        { value: 'Computer Science', label: 'Computer Science' },
        { value: 'Communications', label: 'Communications' },
        { value: 'Business', label: 'Business' },
        { value: 'Psychology', label: 'Psychology' },
      ],
      required: true,
    },
  }),
  columnHelper.display({
    id: 'edit',
    cell: EditCell,
  }),
]

// export const columnsPersonenInfo = [
//   columnHelper.accessor('studentNumber', {
//     header: 'Student Id',
//     cell: TableCell,
//     meta: {
//       type: 'number',
//     },
//   }),
//   columnHelper.accessor('name', {
//     header: 'Full Name',
//     cell: TableCell,
//     meta: {
//       type: 'text',
//       required: true,
//       pattern: '^[a-zA-Z ]+$',
//     },
//   }),
//   columnHelper.accessor('dateOfBirth', {
//     header: 'Date Of Birth',
//     cell: TableCell,
//     meta: {
//       type: 'date',
//       required: true,
//       validate: (value) => {
//         const date = new Date(value);
//         const today = new Date();
//         return date <= today;
//       },
//       validationMessage: 'Date cannot be in the future',
//     },
//   }),
//   columnHelper.accessor('major', {
//     header: 'Major',
//     cell: TableCell,
//     meta: {
//       type: 'select',
//       options: [
//         { value: '', label: 'Select' },
//         { value: 'Computer Science', label: 'Computer Science' },
//         { value: 'Communications', label: 'Communications' },
//         { value: 'Business', label: 'Business' },
//         { value: 'Psychology', label: 'Psychology' },
//       ],
//       required: true,
//     },
//   }),
//   columnHelper.display({
//     id: 'edit',
//     cell: EditCell,
//   }),
// ]
