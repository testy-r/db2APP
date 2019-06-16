-- Beispielwerte werden eingesetzt.


INSERT INTO p_stats(P_STATSID, TOTAL_PLANETENSYSTEME, TOTAL_MASSE)
VALUES (1, 0, 0);

INSERT INTO PLANETENSYSTEM (PlanetensystemName, AnzahlDerPlaneten, Masse)
VALUES ('Sonnensystem', 0, 50000);

INSERT INTO PLANETENSYSTEM (PlanetensystemName, AnzahlDerPlaneten, Masse)
VALUES ('Cervantes', 0, 60000);

INSERT INTO Stern (SName, Helligkeit, bayer, leuchtkraft, Planetensystem_ID)
VALUES ('Sonne', '-26,74', 'Alpha Leonis' ,1, 1);

INSERT INTO Stern (SName, Helligkeit, bayer, leuchtkraft, Planetensystem_ID)
VALUES ('My Arae', '-26,74', 'Alpha Leonis' ,12, 1);

INSERT INTO PLANET (PlanetName, Masse, Durchmesser, Dichte, Aphel, Periphel, Planetensystem_ID)
VALUES ('Erde', 10000, 12.741, 5.51, 1.017, 0.983 , 1);

INSERT INTO PLANET (PlanetName, Masse, Durchmesser, Dichte, Aphel, Periphel, Planetensystem_ID)
VALUES ('Saturn', 20000, 12.00, 5.51, 1.017, 0.983 , 1);

INSERT INTO ZWERGPLANET (PlanetName, Masse, Durchmesser, Dichte, Aphel, Periphel, anzahlHimmelskoerper, Planetensystem_ID)
VALUES ('Pluto', 353555, 12.741, 5.51, 1.017, 0.983, 398473, 1);

INSERT INTO ZWERGPLANET (PlanetName, Masse, Durchmesser, Dichte, Aphel, Periphel, anzahlHimmelskoerper, Planetensystem_ID)
VALUES ('Anthas', 293525, 15.441, 7.51, 2.017, 1.983, 244321, 1);

INSERT INTO Atmosphaere(AtName, DurchschnittsTemp)
VALUES ('N2', 21);

INSERT INTO Atmosphaere(AtName, DurchschnittsTemp)
VALUES ('N4', 60);

INSERT INTO Stoff(StoffName, Farbe, Dichte)
VALUES ('Wasserstoff', 'Durchsichtig', 0.0059);

INSERT INTO Stoff(StoffName, Farbe, Dichte)
VALUES ('Sauerstoff', 'Durchsichtig', 0.6889);

INSERT INTO Stoff(StoffName, Farbe, Dichte)
VALUES ('Stickstoff', 'Durchsichtig', 0.3889);

INSERT INTO MOND(MondName, Bahnperiode, Masse, Planet_ID, Zwergplanet_ID)
VALUES ('Erd-Mond', 27, 23, 1, 0);

INSERT INTO MOND(MondName, Bahnperiode, Masse, Planet_ID, Zwergplanet_ID)
VALUES ('Saturn-Mond', 25, 30, 2, 0);

INSERT INTO AtmosphaereStoff(Atmosphaere_ID, Stoff_ID)
VALUES (1,1);

INSERT INTO AtmosphaereStoff(Atmosphaere_ID, Stoff_ID)
VALUES (1,2);

INSERT INTO AtmosphaereStoff(Atmosphaere_ID, Stoff_ID)
VALUES (1,3);

INSERT INTO AtmosphaereStoff(Atmosphaere_ID, Stoff_ID)
VALUES (2,1);

INSERT INTO AtmosphaereStoff(Atmosphaere_ID, Stoff_ID)
VALUES (2,2);

INSERT INTO AtmosphaerePlanet(Atmosphaere_ID, Planet_ID, Anteil, Hoehe)
VALUES (1,1,100,20);

INSERT INTO AtmosphaerePlanet(Atmosphaere_ID, Planet_ID, Anteil, Hoehe)
VALUES (2,2,100,40);



-- Test der Triggers tr_AnzahlMasse ausgeloest beSERT

INSERT INTO PLANET (PlanetName, Masse, Durchmesser, Dichte, Aphel, Periphel, Planetensystem_ID)
VALUES ('Merkur', 30000, 15.00, 5.51, 1.017, 0.983 , 1);

-- Test der Triggers tr_AnzahlMasse ausgeloest bei INSERT

INSERT INTO PLANET (PlanetName, Masse, Durchmesser, Dichte, Aphel, Periphel, Planetensystem_ID)
VALUES ('Mars', 40000, 12.741, 5.51, 1.017, 0.983 , 1);





-- Test der Triggers tr_AnzahlMasse ausgeloest bei UPDATE

UPDATE PLANET SET MASSE = 5 WHERE PLANETNAME = 'Erde';

UPDATE PLANET SET MASSE = 60000 WHERE PLANETNAME = 'Mars';


-- Test der Triggers tr_AnzahlMasse ausgeloest bei DELETE

DELETE FROM PLANET WHERE PLANETNAME = 'Merkur';

DELETE FROM PLANET WHERE PLANETNAME = 'Mars';

SELECT * FROM PLANET;

-- Test der Triggers tr_newDichte

UPDATE PLANET SET DURCHMESSER = 20 WHERE PLANETNAME = 'Saturn';

UPDATE PLANET SET DURCHMESSER = 12 WHERE PLANETNAME = 'Merkur';

-- Test der Triggers tr_newDichte

UPDATE PLANET SET MASSE = 6000000 WHERE PLANETNAME = 'Erde';

UPDATE PLANET SET MASSE = 7000000 WHERE PLANETNAME = 'Mars';

SELECT * FROM PLANET;

-- Test für myTrigger10
INSERT INTO PLANETENSYSTEM (PlanetensystemName, AnzahlDerPlaneten, Masse)
VALUES ('Cerberus', 0, 388343);

-- Test der Funktion fk_Umlaufbahn

SELECT fk_Umlaufbahn(PLANET_ID) Umlaufbahn FROM PLANET;

-- Test der Funktion fk_SternInfo

SELECT fk_SternInfo(Stern_ID) SternInfo FROM Stern;

-- Test der Funktion fk_HabitableZone

SELECT fk_HabitableZone(PLANET_ID) Habitable FROM PLANET;
