/* eslint-disable prettier/prettier */
import React from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CAccordion,
  CAccordionBody,
  CAccordionHeader,
  CAccordionItem,
  CListGroup,
  CListGroupItem,
} from '@coreui/react'

const GesetzesvorschriftenAktuell = () => {
  return (
   
              <CAccordion activeItemKey={1}>
                <CAccordionItem itemKey={1}>
                  <CAccordionHeader>
                    (1) Anbauvereinigungen haben zum Nachweis der Einhaltung der Vorgaben der §§ 18 bis 20 und 22 für die
                    Rückverfolgbarkeit des weitergegebenen Cannabis und Vermehrungsmaterials fortlaufend folgende Angaben zu
                    dokumentieren:
                  </CAccordionHeader>
                  <CAccordionBody>
                    <CListGroup>
                      <CListGroupItem>
                        1. Name, Vorname und Anschrift jeder Person, Name und Sitz jeder Anbauvereinigung oder Name 
                        und Sitz jeder juristischen Person, von der sie Vermehrungsmaterial erhalten haben,
                      </CListGroupItem>
                      <CListGroupItem>
                        2. Mengen an Cannabis in Gramm und Stückzahl des Vermehrungsmaterials, die sich in oder 
                        auf ihrem befriedeten Besitztum befinden,
                      </CListGroupItem>
                      <CListGroupItem>3. Mengen des angebauten Cannabis in Gramm</CListGroupItem>
                      <CListGroupItem>
                        4.Mengen des vernichteten Cannabis in Gramm und Stückzahl des vernichteten
                        Vermehrungsmaterials,
                      </CListGroupItem>
                      <CListGroupItem>
                        5. Name, Vorname und Geburtsjahr jedes Mitglieds, an das Cannabis weitergegeben wurde, sowie die folgenden
                        Angaben zu dem weitergegebenen Cannabis:
                        <CListGroup>
                          <CListGroupItem>a) Menge in Gramm,</CListGroupItem>
                          <CListGroupItem>b) durchschnittlicher THC-Gehalt,</CListGroupItem>
                          <CListGroupItem>c) Datum der Weitergabe,</CListGroupItem>
                        </CListGroup>
                      </CListGroupItem>
                      <CListGroupItem>
                        6. Name, Vorname und Geburtsjahr jedes Mitglieds, an das Vermehrungsmaterial weitergegeben wurde, sowie
                        folgende Angaben zu dem weitergegebenen Vermehrungsmaterial:
                        <CListGroup>
                          <CListGroupItem>
                            a) Stückzahl des weitergegebenen Vermehrungsmaterials,
                          </CListGroupItem>
                          <CListGroupItem>b) Datum der Weitergabe und</CListGroupItem>
                        </CListGroup>
                      </CListGroupItem>
                      <CListGroupItem>
                        7. Mengen in Gramm und Sorten des gemäß § 22 Absatz 3 transportierten Cannabis, Name und Vorname des
                        jeweils den Transport durchführenden oder begleitenden Mitglieds sowie Datum, Start- und Zieladresse des
                        jeweiligen Transports.
                      </CListGroupItem>
                      <CListGroupItem>
                        Bei der Weitergabe von Vermehrungsmaterial an die in § 20 Absatz 1 Satz 1 Nummer 2 genannten Personen haben
                        die Anbauvereinigungen abweichend von Satz 1 Nummer 6 nur die Stückzahl und das Datum der Weitergabe zu
                        dokumentieren.
                      </CListGroupItem>
                    </CListGroup>
                  </CAccordionBody>
                </CAccordionItem>

               <CAccordionItem itemKey={2}>
                  <CAccordionHeader>                   
                    (2) Anbauvereinigungen haben die Aufzeichnungen der Angaben nach Absatz 1 fünf Jahre aufzubewahren und
                    der zuständigen Behörde auf Verlangen elektronisch zu übermitteln. Anbauvereinigungen haben der zuständigen
                    Behörde zum Zweck der Evaluation nach § 43 jährlich bis zum 31. Januar die im vorangegangenen Kalenderjahr
                    dokumentierten Angaben nach Absatz 1 anonymisiert elektronisch zu übermitteln.</CAccordionHeader>
                </CAccordionItem>

                <CAccordionItem itemKey={3}>
                  <CAccordionHeader>
                    (3) Anbauvereinigungen haben zum Nachweis der Einhaltung der nach § 13 Absatz 3 erlaubten jährlichen
                    Eigenanbau- und Weitergabemengen der zuständigen Behörde bis zum 31. Januar eines jeden Kalenderjahres
                    elektronisch die folgenden Angaben zu den Mengen an Cannabis in Gramm zu übermitteln, die</CAccordionHeader>
                  <CAccordionBody>
                    <CListGroupItem>
                        <CListGroup>
                          <CListGroupItem>
                            1. im vorangegangenen Kalenderjahr von ihnen
                            <CListGroup>
                              <CListGroupItem>a) angebaut wurden,</CListGroupItem>
                              <CListGroupItem>b) weitergegeben wurden,</CListGroupItem>
                              <CListGroupItem>c) vernichtet wurden und</CListGroupItem>
                            </CListGroup>
                          </CListGroupItem>
                          <CListGroupItem>
                            2. am Ende des vorangegangenen Kalenderjahres in ihrem Bestand vorhanden
                            waren.
                          </CListGroupItem>

                          <CListGroupItem>
                            Die Angaben sind nach Sorten von Cannabis und nach dem jeweiligen
                            durchschnittlichen Gehalt an THC und CBD aufzugliedern.
                            <CListGroup>
                              <CListGroupItem>
                                (4) Anbauvereinigungen haben unverzüglich die jeweils zuständige Behörde zu informieren, wenn sie wissen
                                oder aufgrund der ihnen vorliegenden Informationen oder ihrer Erfahrung vermuten, dass der Konsum des von
                                ihnen weitergegebenen Cannabis oder die Verwendung des von ihnen weitergegebenen Vermehrungsmaterials
                                ein Risiko für die menschliche Gesundheit darstellt, das über die typischen Gefahren des Konsums von Cannabis
                                hinausgeht, insbesondere aufgrund von Gehalten an in § 17 Absatz 4 genannten Stoffen. Die Anbauvereinigungen
                                haben unverzüglich die erforderlichen Maßnahmen zur Beseitigung des Risikos zu treffen, insbesondere
                                ihre Mitglieder zu informieren und das betroffene Cannabis oder Vermehrungsmaterial zurückzurufen,
                                zurückzunehmen und zu vernichten.
                              </CListGroupItem>
                              <CListGroupItem>
                                (5) Besteht der Verdacht eines Abhandenkommens oder einer unerlaubten Weitergabe von Cannabis oder
                                Vermehrungsmaterial, so hat die Anbauvereinigung unverzüglich die zuständige Behörde zu informieren.
                                Vertretungsberechtigte Personen der Anbauvereinigung können eine Auskunft nach Satz 1 verweigern, wenn die
                                Auskunft sie selbst oder einen ihrer Angehörigen der Gefahr strafrechtlicher Verfolgung oder eines Verfahrens nach
                                dem Gesetz über Ordnungswidrigkeiten aussetzen würde.
                              </CListGroupItem>
                            </CListGroup>
                          </CListGroupItem>
                        </CListGroup>
                      </CListGroupItem>
                  </CAccordionBody>
                </CAccordionItem>
              </CAccordion>
  )
}

export default GesetzesvorschriftenAktuell
