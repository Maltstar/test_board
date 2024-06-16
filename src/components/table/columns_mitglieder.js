/* eslint-disable prettier/prettier */
import { createColumnHelper } from '@tanstack/react-table'
import { TableCell } from './TableCell'
//import { Student } from './types'
import { EditCell } from './EditCell'
import { validate_date } from './columns'

const columnHelper = createColumnHelper()

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
      personen: [
        { acc_name: 'Name', type: 'text' },
        { acc_name: 'Vorname', type: 'text' },
        { acc_name: 'Anschrift', type: 'text' },
      ],
      anbauvereinigung: [
        { acc_name: 'Name', type: 'text' },
        { acc_name: 'Sitz', type: 'text' },
      ],
      juristischen: [
        { acc_name: 'Name', type: 'text' },
        { acc_name: 'Sitz', type: 'text' },
      ], // juristischen Personen
    },

    // mengen Cannabis im Gramm und Stückzahl Vermehrungsmaterial im Besitzum
    /**
       * 2. Mengen an Cannabis in Gramm und Stückzahl des Vermehrungsmaterials, die sich in oder auf ihrem befriedeten
        Besitztum befinden,
       * 
       */
    2: {
      mengen: [
        { acc_name: 'Gramm', type: 'number' },
        { acc_name: 'Stückzahl', type: 'number' },
      ],
    },

    // 3. mengen angebauten Cannabis im Gramm /
    3: {
      mengen: [{ acc_name: 'Gramm', type: 'number' }],
    },

    // 4. mengen vernichteten Cannabis in Gramm und Stückzahl des vernichteten Vermehrungsmaterials
    4: {
      mengen: [
        { acc_name: 'Gramm', type: 'number' },
        { acc_name: 'Stückzahl', type: 'number' },
      ],
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
      //mitglied: ['Name,', 'Vorname', 'Geburtsjahr', 'Menge', 'THC-Gehalt', 'Datum'],
      mitglied: [
        { acc_name: 'Name', type: 'text' },
        { acc_name: 'Vorname', type: 'text' },
        {
          acc_name: 'Geburtsjahr',
          type: 'date',
          validate: (value) => {
            const date = new Date(value)
            const today = new Date()
            return date <= today
          },
          validationMessage: 'Date cannot be in the future',
        },
        { acc_name: 'Menge', type: 'number' },
        { acc_name: 'THC-Gehalt', type: 'number' },
        {
          acc_name: 'Datum',
          type: 'date',
          validate: (value) => {
            const date = new Date(value)
            const today = new Date()
            return date <= today
          },
          validationMessage: 'Date cannot be in the future',
        },
      ],
    },

    // Mitglied identifikation und mengen an weitergegebenene Vermehrungsmaterial
    /**
       * 6. Name, Vorname und Geburtsjahr jedes Mitglieds, an das Vermehrungsmaterial weitergegeben wurde, sowie
            folgende Angaben zu dem weitergegebenen Vermehrungsmaterial:
            a) Stückzahl des weitergegebenen Vermehrungsmaterials,
            b) Datum der Weitergabe und
       */
  //   6: {
  //     mitglied: ['Name,', 'Vorname', 'Geburtsjahr', 'Menge', 'Datum'],
  //   },

  //   /**
  //       * 7. Mengen in Gramm und Sorten des gemäß § 22 Absatz 3 transportierten Cannabis, Name und Vorname des
  //         jeweils den Transport durchführenden oder begleitenden Mitglieds sowie Datum, Start- und Zieladresse des
  //         jeweiligen Transports.
  //       * 
  //       * § 22 Absatz 3:
  //       * 3. die Anbauvereinigung das Datum, die Start- und Zieladresse des Transports sowie die Mengen in Gramm und
  //         Sorten des transportierten Cannabis spätestens einen Werktag vor Beginn des Transports gegenüber der
  //         zuständigen Behörde schriftlich oder elektronisch anzeigt, 
  //       *  */
  //   7: {
  //     transport: ['Datum,', 'Start', 'Ziel', 'Menge', 'Name', 'Vorname'],
  //   },
  //   /**
  //      * Bei der Weitergabe von Vermehrungsmaterial an die in § 20 Absatz 1 Satz 1 Nummer 2 genannten Personen haben
  //       die Anbauvereinigungen abweichend von Satz 1 Nummer 6 nur die Stückzahl und das Datum der Weitergabe zu
  //       dokumentieren.
  //      * 
  //      */

  //   8: {
  //     vermehrungsmaterial_no_members: ['Datum,', 'Menge'],
  //   },
  // },

  // 3: '',
  }
}

export const columns_personen = () => {
  console.log('columsAccessors',columsAccessors[1][1].personen);
  const columns_app =  columsAccessors[1][1].personen.map((accessorConf) => {
    console.log('accessorConf',accessorConf);
    return columnHelper.accessor(accessorConf.acc_name,{
      header: accessorConf.acc_name,
      cell: TableCell,
      meta: {
        type: accessorConf.type,
        required: accessorConf.hasOwnProperty('required') ? accessorConf.required : false,
        pattern: accessorConf.hasOwnProperty('pattern') ? accessorConf.pattern : '',
        validate: accessorConf.hasOwnProperty('validate') ? accessorConf.validate : () => {},
        validationMessage: accessorConf.hasOwnProperty('validationMessage')
          ? accessorConf.validationMessage
          : '',
        options: accessorConf.hasOwnProperty('options') ? accessorConf.pattern : [],
      },
    })
  })

  return columns_app
}

export const columns = [
    columnHelper.accessor('id', {
    header: 'id',
    cell: TableCell,
    meta: {
      type: 'number',
    },
  }),
  columnHelper.accessor('Name', {
    header: 'Name',
    cell: TableCell,
    meta: {
      type: 'text',
      required: true,
      pattern: '^[a-zA-Z ]+$',
    },
  }),
  columnHelper.accessor('Vorname', {
    header: 'Vorname',
    cell: TableCell,
    meta: {
      type: 'text',
      required: true,
      pattern: '^[a-zA-Z ]+$',
    },
  }),
  columnHelper.accessor('Geburtsjahr', {
    header: 'Geburtsjahr',
    cell: TableCell,
    meta: {
      type: 'date',
      required: true,
      validate: (value) => validate_date(value),
      validationMessage: 'Date cannot be in the future',
    },
  }),
  columnHelper.accessor('Menge in g', {
    header: 'Menge in g',
    cell: TableCell,
    meta: {
      type: 'number',
    },
  }),
  columnHelper.accessor('THC-Gehalt in %', {
    header: 'THC-Gehalt in %',
    cell: TableCell,
    meta: {
      type: 'number',
    },
  }),
  columnHelper.accessor('erstellt_am', {
    header: 'erstellt_am',
    cell: TableCell,
    meta: {
      type: 'text',
      required: true,
      pattern: '^.+$',
    },
  }),
  columnHelper.display({
    id: 'edit',
    cell: EditCell,
  }),
]