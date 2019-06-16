DROP TABLE IF EXISTS AtmosphaerePlanet;
DROP TABLE IF EXISTS AtmosphaereStoff;
DROP TABLE IF EXISTS AtmosphaereZwergplanet;
DROP TABLE IF EXISTS p_stats;
DROP TABLE IF EXISTS Stern;
DROP TABLE IF EXISTS MOND;
DROP TABLE IF EXISTS Stoff;
DROP TABLE IF EXISTS Atmosphaere;
DROP TABLE IF EXISTS ZWERGPLANET;
DROP TABLE IF EXISTS PLANET;
DROP TABLE IF EXISTS PLANETENSYSTEM;


DROP VIEW IF EXISTS AllObjects;
DROP VIEW IF EXISTS vMondDetails;
DROP VIEW IF EXISTS ZwergPlanetenKoerper;
DROP VIEW IF EXISTS vAnzahlPlPlanetSys;
DROP VIEW IF EXISTS HabitablePlaneten;

drop trigger if exists myTrigger10;
DROP TRIGGER IF EXISTS tr_AnzahlMasse;
DROP TRIGGER IF EXISTS tr_newDichte;
DROP TRIGGER IF EXISTS tr_ZwergZuPlanet;
DROP TRIGGER IF EXISTS tr_vMondDetails;

DROP FUNCTION IF EXISTS fk_HabitableZone;
DROP FUNCTION IF EXISTS fk_Umlaufbahn;
DROP FUNCTION IF EXISTS fk_SternInfo;

DROP TRIGGER IF EXISTS fk_Umlaufbahn;
DROP TRIGGER IF EXISTS fk_HabitableZone;
DROP TRIGGER IF EXISTS fk_Umlaufbahn;

DROP TABLE IF EXISTS Benutzer;

CREATE TABLE IF NOT EXISTS Benutzer(
    Benutzer_ID INTEGER PRIMARY KEY AUTO_INCREMENT,
    BenutzerName varchar(255) NOT NULL,
    Passwort varchar(255) NOT NULL,
    BenutzerRolle varchar(255) NOT NULL,
    BenutzerLevel INTEGER NOT NULL
);

INSERT INTO Benutzer(BenutzerName, Passwort, BenutzerRolle, BenutzerLevel) VALUES ('Rene', 'mcp23', 'Admin', 1);



CREATE TABLE IF NOT EXISTS PLANETENSYSTEM(
                                             Planetensystem_ID   INTEGER         PRIMARY KEY AUTO_INCREMENT,
                                             PlanetensystemName  varchar(255)    NOT NULL,
                                             AnzahlDerPlaneten   INTEGER         NOT NULL,
                                             Masse               INTEGER         NOT NULL
);

CREATE TABLE IF NOT EXISTS Stern(
                                    Stern_ID            INTEGER         PRIMARY KEY AUTO_INCREMENT,
                                    SName               varchar(255)    NOT NULL,
                                    Helligkeit          varchar(255)    NOT NULL,
                                    bayer               varchar(255)    NOT NULL,
                                    leuchtkraft         INTEGER         NOT NULL,
                                    Planetensystem_ID   INTEGER         NOT NULL
);

CREATE TABLE IF NOT EXISTS PLANET(
                                     Planet_ID           INTEGER         PRIMARY KEY AUTO_INCREMENT,
                                     PlanetName          varchar(255)    NOT NULL,
                                     Masse               INTEGER         NOT NULL,
                                     Durchmesser         INTEGER         NOT NULL,
                                     Dichte              INTEGER         NOT NULL,
                                     Aphel               INTEGER         NOT NULL,
                                     Periphel            INTEGER         NOT NULL,
                                     Planetensystem_ID   INTEGER         NOT NULL
);

CREATE TABLE IF NOT EXISTS ZWERGPLANET(
                                          Zwergplanet_ID      INTEGER         PRIMARY KEY AUTO_INCREMENT,
                                          PlanetName          varchar(255)    NOT NULL,
                                          Masse               INTEGER         NOT NULL,
                                          Durchmesser         INTEGER        NOT NULL,
                                          Dichte              INTEGER         NOT NULL,
                                          Aphel               INTEGER        NOT NULL,
                                          Periphel            INTEGER         NOT NULL,
                                          anzahlHimmelskoerper INTEGER        NOT NULL,
                                          Planetensystem_ID   INTEGER         NOT NULL
);

CREATE TABLE IF NOT EXISTS MOND(
                                   Mond_ID             INTEGER         PRIMARY KEY AUTO_INCREMENT,
                                   MondName            varchar(255)    NOT NULL,
                                   Bahnperiode         varchar(255)    NOT NULL,
                                   Masse               INTEGER         NOT NULL,
                                   Planet_ID           INTEGER         NULL,
                                   Zwergplanet_ID      INTEGER         NULL
);

CREATE TABLE IF NOT EXISTS Stoff(
                                    Stoff_ID            INTEGER         PRIMARY KEY AUTO_INCREMENT,
                                    StoffName           varchar(255)    NOT NULL,
                                    Farbe               varchar(255)    NOT NULL,
                                    Dichte              INTEGER         NOT NULL
);

CREATE TABLE IF NOT EXISTS Atmosphaere(
                                          Atmosphaere_ID      INTEGER         PRIMARY KEY AUTO_INCREMENT,
                                          AtName              varchar(255)    NOT NULL,
                                          DurchschnittsTemp   INTEGER         NOT NULL
);


create table p_stats(
                        p_statsID INTEGER AUTO_INCREMENT,
                        total_planetensysteme Integer(30),
                        total_masse Integer(30),
                        PRIMARY KEY (p_statsID)
);


CREATE TABLE IF NOT EXISTS AtmosphaerePlanet(
                                                Atmosphaere_ID         INTEGER         NOT NULL ,
                                                Planet_ID              INTEGER         NOT NULL ,
                                                Anteil                 INTEGER         NOT NULL,
                                                hoehe                  INTEGER         NOT NULL,
                                                CONSTRAINT  PKAtmosphaerePlanet PRIMARY KEY (Atmosphaere_ID,Planet_ID) );


CREATE TABLE IF NOT EXISTS AtmosphaereStoff (
                                                Atmosphaere_ID          INTEGER         NOT NULL ,
                                                Stoff_ID                INTEGER         NOT NULL ,
                                                CONSTRAINT PKAtmosphaereStoff PRIMARY KEY (Atmosphaere_ID,Stoff_ID) );

ALTER TABLE AtmosphaereStoff ADD CONSTRAINT FK_AS_Atmo
    FOREIGN KEY (Atmosphaere_ID) REFERENCES Atmosphaere(Atmosphaere_ID) ON DELETE CASCADE;

ALTER TABLE AtmosphaereStoff ADD CONSTRAINT FK_AS_Stoff
    FOREIGN KEY (Stoff_ID) REFERENCES Stoff(Stoff_ID) ON DELETE CASCADE;

ALTER TABLE AtmosphaerePlanet ADD CONSTRAINT FK_AP_Atmo
    FOREIGN KEY (Atmosphaere_ID) REFERENCES Atmosphaere(Atmosphaere_ID) ON DELETE CASCADE;

ALTER TABLE AtmosphaerePlanet ADD CONSTRAINT FK_AP_Planet
    FOREIGN KEY (Planet_ID) REFERENCES PLANET(Planet_ID) ON DELETE CASCADE;

CREATE TABLE IF NOT EXISTS AtmosphaereZwergplanet(
                                                     Atmosphaere_ID          INTEGER        NOT NULL ,
                                                     Zwergplanet_ID          INTEGER        NOT NULL ,
                                                     CONSTRAINT  PKAtmosphaereZwergplanet PRIMARY KEY (Atmosphaere_ID,Zwergplanet_ID) );

ALTER TABLE AtmosphaereZwergplanet ADD CONSTRAINT FK_AZP_Atmo
    FOREIGN KEY (Atmosphaere_ID) REFERENCES Atmosphaere(Atmosphaere_ID) ON DELETE CASCADE;

ALTER TABLE AtmosphaereZwergplanet ADD CONSTRAINT FK_AZP_Zwergplanet
    FOREIGN KEY (Zwergplanet_ID) REFERENCES ZWERGPLANET(Zwergplanet_ID) ON DELETE CASCADE;

ALTER TABLE Stern ADD CONSTRAINT FK_SternPlanetensystem
    FOREIGN KEY (Planetensystem_ID) REFERENCES PLANETENSYSTEM(Planetensystem_ID) ON DELETE CASCADE;

ALTER TABLE PLANET ADD CONSTRAINT FK_PlanetPlanetensystem
    FOREIGN KEY (Planetensystem_ID) REFERENCES PLANETENSYSTEM(Planetensystem_ID) ON DELETE CASCADE;

ALTER TABLE ZWERGPLANET ADD CONSTRAINT FK_ZwergplanetPlanetensystem
    FOREIGN KEY (Planetensystem_ID) REFERENCES PLANETENSYSTEM(Planetensystem_ID) ON DELETE CASCADE;

ALTER TABLE MOND ADD CONSTRAINT FK_MondPlanet
    FOREIGN KEY (Planet_ID) REFERENCES PLANET(Planet_ID) ON DELETE CASCADE;



CREATE VIEW AllObjects AS
SELECT PLANET.PLANETNAME as Planetname, MOND.MondName as Mondname, ZWERGPLANET.Planetname as Zwergplanetname
FROM PLANETENSYSTEM JOIN PLANET on PLANETENSYSTEM.PLANETENSYSTEM_ID = PLANET.PLANETENSYSTEM_ID
                    JOIN MOND on PLANET.PLANET_ID = MOND.PLANET_ID
                    JOIN ZWERGPLANET on PLANETENSYSTEM.PLANETENSYSTEM_ID = ZWERGPLANET.PLANETENSYSTEM_ID;


CREATE VIEW vMondDetails
AS
SELECT MOND_ID, MONDNAME, BAHNPERIODE, MOND.MASSE, PLANETNAME
FROM MOND join PLANET P on MOND.PLANET_ID = P.PLANET_ID;


DELIMITER $$
CREATE TRIGGER tr_AnzahlMasseInsert
    BEFORE INSERT ON PLANET
    FOR EACH ROW

BEGIN

    UPDATE PLANETENSYSTEM SET AnzahlDerPlaneten = AnzahlDerPlaneten + 1, MASSE = MASSE + new.MASSE
    WHERE Planetensystem_ID = new.PLANETENSYSTEM_ID;
END; $$
DELIMITER  ;


DELIMITER $$
CREATE TRIGGER tr_AnzahlMasseUpdate
    AFTER UPDATE ON PLANET
    FOR EACH ROW

BEGIN

    UPDATE PLANETENSYSTEM SET MASSE = MASSE - old.MASSE + new.MASSE
    WHERE Planetensystem_ID = new.PLANETENSYSTEM_ID;

END; $$
DELIMITER  ;


DELIMITER $$
CREATE TRIGGER tr_AnzahlMasseDelete
    BEFORE DELETE ON PLANET
    FOR EACH ROW

BEGIN

    UPDATE PLANETENSYSTEM SET AnzahlDerPlaneten = AnzahlDerPlaneten - 1, MASSE = MASSE - old.MASSE
    WHERE Planetensystem_ID = old.PLANETENSYSTEM_ID;

END; $$
DELIMITER  ;




DELIMITER $$
CREATE TRIGGER tr_newDichte
    BEFORE UPDATE ON PLANET
    FOR EACH ROW
BEGIN

    DECLARE v_neueDichte INTEGER;
    DECLARE v_volumen INTEGER;
    DECLARE v_radius INTEGER;
    DECLARE v_pi DECIMAL;

    IF OLD.MASSE != NEW.masse OR OLD.Durchmesser != NEW.Durchmesser THEN

        SET v_radius = NEW.DURCHMESSER / 2;
        SET v_pi = 3.14159;
        SET  v_volumen = (4/3) * v_pi * (v_radius*3);
        SET v_neueDichte = NEW.Masse / v_volumen;
        SET NEW.DICHTE = v_neueDichte;
    END IF;
END; $$

DELIMITER  ;


DELIMITER $$

create trigger myTrigger10
    after insert on PLANETENSYSTEM
    for each row
BEGIN

    DECLARE v_Planets INTEGER;
    DECLARE v_masse INTEGER;

    declare c_Planets CURSOR for
        SELECT SUM(masse) total_masse,
               SUM(anzahlDerPlaneten) total_anzahlplaneten
        FROM PLANETENSYSTEM;

    open c_Planets;

    fetch next from c_Planets INTO v_masse, v_Planets;
    UPDATE p_stats
    SET total_planetensysteme = v_Planets,
        total_masse = v_masse
    WHERE p_statsID = '1';



    close c_Planets;
end$$
DELIMITER  ;


CREATE VIEW ZwergPlanetenKoerper
AS SELECT ZWERGPLANET_ID, PLANETNAME, MASSE, DURCHMESSER, DICHTE, APHEL, PERIPHEL, ANZAHLHIMMELSKOERPER, PLANETENSYSTEM_ID FROM ZWERGPLANET;


DELIMITER $$
CREATE FUNCTION fk_Umlaufbahn(PlanetID INTEGER)
    RETURNS INT
BEGIN
    DECLARE  Kreisform INTEGER;
    DECLARE PlanetAphel INTEGER;
    DECLARE PlanetPeriphel INTEGER;


    SET Kreisform = 0;
    SELECT Aphel INTO PlanetAphel FROM PLANET WHERE PlanetID = PLANET.PLANET_ID;
    SELECT Periphel INTO PlanetPeriphel FROM PLANET WHERE PlanetID = PLANET.PLANET_ID;

    IF (PlanetAphel - PlanetPeriphel) < 50
    THEN SET Kreisform = 1;
    ELSE SET Kreisform = 0;
    END IF;

    RETURN Kreisform;
END$$
DELIMITER ;

DELIMITER $$
CREATE FUNCTION fk_SternInfo(SternID INTEGER)
    RETURNS VARCHAR(100)

BEGIN
    DECLARE SternInfo VARCHAR(100);

    SELECT 'Name: '||Stern.SNAME||', Helligkeit: '|| Stern.HELLIGKEIT||', Bayer: '||Stern.BAYER||', Leuchtkraft: '||Stern.LEUCHTKRAFT
    INTO SternInfo
    FROM Stern JOIN PLANETENSYSTEM ON Stern.PLANETENSYSTEM_ID = PLANETENSYSTEM.PLANETENSYSTEM_ID WHERE SternID = Stern.STERN_ID;

    RETURN SternInfo;
END$$
DELIMITER ;

DELIMITER $$
CREATE FUNCTION fk_HabitableZone(PlanetID INTEGER)
    RETURNS INT

BEGIN
    DECLARE vPlanetMasse INTEGER;
    DECLARE vPlanetDichte INTEGER;
    DECLARE vPlanetTemp INTEGER;

    SELECT Masse INTO vPlanetMasse FROM PLANET WHERE PlanetID = PLANET.PLANET_ID;
    SELECT Dichte INTO vPlanetDichte FROM PLANET WHERE PlanetID = PLANET.PLANET_ID;
    SELECT DURCHSCHNITTSTEMP INTO vPlanetTemp FROM PLANET JOIN AtmosphaerePlanet ON PLANET.PLANET_ID = AtmosphaerePlanet.PLANET_ID
                                                          JOIN Atmosphaere ON AtmosphaerePlanet.ATMOSPHAERE_ID = Atmosphaere.ATMOSPHAERE_ID
    WHERE DurchschnittsTemp > 0 AND DurchschnittsTemp < 50;

    IF vPlanetDichte < 7 AND vPlanetMasse >= 150 AND vPlanetTemp < 40
    THEN
        RETURN 1;
    ELSE
        RETURN 0;
    END IF;
END$$
DELIMITER ;

CREATE VIEW HabitablePlaneten AS
SELECT * FROM PLANET WHERE fk_HabitableZone(PLANET_ID) = 1;


CREATE VIEW vAnzahlPlPlanetSys AS SELECT PLANETENSYSTEM.ANZAHLDERPLANETEN, PLANETENSYSTEM.MASSE FROM PLANETENSYSTEM;


