import React from "react";

import "./about.css";

export const About = () => {
  return (
    <div className="bg-light text-dark py-5">
      <div className="ui container d-flex flex-sterch">
        <div className="pt-5">
          <div className="ui secondary vertical pointing menu position-sticky mt-5 fixed-top-2 ">
            {/*TODO: Refractor this section*/}
            <a href="#historie" className="active item">
              Historie
            </a>
            <a href="#verdier" className="item">
              Verdier
            </a>
            <a href="#visjon" className="item">
              Visjon
            </a>
            <a href="#misjon" className="item">
              misjon
            </a>
            <a href="#programmer" className="item">
              Programmer
            </a>

            <a href="#struktur" className="item">
              Organisasjonsstruktur
            </a>
          </div>
        </div>
        <div className="ui containert w-75 p-3 pl-5">
          <p>
            Foreningen har som mål å bruke norsk-etiopiske fagfolk og
            akademikere utdannet i Norge for implementering av FNs
            bærekraftsmålene 2030 og skal samarbeide med norske myndigheter i
            oppfølgingen av bærekraftsmålene 2030, og implementeringen av dem.
          </p>
          <div id="historie" className="ui divider" />
          <h1>Vår historie</h1>
          <p>
            ENPO førstemøtet fant sted i Oslo den 24 juni 2018 መደመር.
            Initiativtakeren Selamawit Jimma tok kontakt med sitt kjente
            profesjonelt nettverk til å samle alle resurser for å støtte og
            styrke den nye radikale reformen i Etiopia som profesjonelle. Dagen
            24 juni ble valgt tilfeldigvis etter den historisk dagen 23 juni
            2018. En historisk dag som ble arrangert fredelig folkemøte i Addis
            Abeba for å vise støtte til den nye reformvennlige Statsministere
            Dr. Abiy Ahmed.
          </p>
          <p>
            Optimismen å fremme Etiopias enhet er et av hoved motivasjonen kilde
            for å etablere ENPO, men også alle viktigeste var å fremme utvikling
            og støtte for våre etiopiske søstre og brødre som fortjener
            internasjonal støtte i tiden fremover uansett hvem som leder landet.
            Herskerne kommer og går, folk forblir! Allerede i først dagen fem av
            deltakere ble vi enig om at ENPO skal være ideell non-politisk, og
            non -religiøs organ. Organisasjonen ble etablert 10 august 2018.
          </p>
          <p>
            ENPO er ideell , non-politisk, og non -religiøs organisasjon som gir
            en bredere plattform for etiopiske diaspora på tvers av alle yrker
            og turer i livet for å koble, nettverk, dele erfaringer, utveksle
            verdifulle ressurser og forfølge samfunnsutviklingsinitiativer. En
            sammenslutningen av fagpersoner som er bosatt i Norge. Organisert
            for å bruke etiopiernes yrkesrettet og akademiske faglige kompetanse
            i Etiopia og bidra med «Brain Gain». Foreningen består av et
            nettverk (medlemmer) av flere som har høyere utdanning i Norge.
            Medlemmene jobber sammen for å dele, overføre kunnskap og erfaringer
            til Etiopia.
          </p>

          <div id="verdier" className="ui divider" />
          <h1>Verdier</h1>
          <div className="ui list container">
            <div className="item">
              <p>Profesjonalitet</p>
            </div>
            <div className="item">
              <p>Empowerment</p>
            </div>
            <div className="item">
              <p>Innovasjon</p>{" "}
            </div>
            <div className="item">
              <p>Deltakelse</p>
            </div>
            <div className="item">
              <p>Ansvarlighet</p>{" "}
            </div>
            <div className="item">
              <p>Medmenneskelighet</p>{" "}
            </div>
            <div className="item">
              <p>Åpenhet</p>
            </div>
          </div>

          <div id="visjon" className="ui divider" />
          <h1> Visjon</h1>

          <p>
            ENPO har visjon om å bygge et sterkt samfunn både i Norge og i
            Etiopia som deler ideer, ferdigheter og ressurser for å berike et
            bedre samfunn. “We rise by lifting others!”
          </p>

          <div id="misjon" className="ui divider" />
          <h1>Misjon</h1>

          <p>
            Bruke vår maksimale menneskelige, sosiale og finale kapitaer for å
            oppfylle vår visjon.
          </p>

          <div id="programmer" className="ui divider" />
          <h1>Programmer i Norge</h1>
          <p>
            Hovedmålet med dette programmet er å tilby omfattende, unike og lett
            tilgjengelige ressurser og ulike plattformer for å hjelpe deg med å
            vokse. Programmet gir også videoklipp. I nær fremtid gir den også
            muligheter til å delta på virtuelle og personlige workshops til de
            som vil fortsette å jobbe med sin personlige og faglige utvikling.
            Programmet har tre fokusområder. Under hvert område har vi
            identifisert visse myke ferdigheter. Disse myke ferdighetene gjør at
            du: Å øke selvbevisstheten og personlig mestring Å kommunisere
            effektivt og komme i mål Å inspirere, påvirke og lede andre Enten du
            er student, ser etter din første jobb eller ønsker å komme opp i
            bedriftsstigen, åpner virksomheten din eller utvide karrieren din ,
            må du utmerke seg i de tre ovennevnte områdene:
          </p>

          <div id="struktur" className="ui divider" />
          <h1> Organisasjonsstruktur</h1>

          <div className="ui image">
            <img
              src="./img/ENPO_organisasjonskart.png"
              alt="organisasjonskart"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
