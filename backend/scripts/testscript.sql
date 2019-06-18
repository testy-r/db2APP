-- Testscript


-- Test des Triggers tr_AnzahlMasse
-- Beim INSERT, UPDATE oder DELET eines Planeten wird die Masse des Planetensystems erneut berechnet
-- sowie die Anzahl der Planeten im Planetensystem

-- SELET Answeisung gibt die aktuelle Masse vor auslˆsen des Trigger aus

SELECT * FROM PLANETENSYSTEM;

-- INSERT eines Planeten
INSERT INTO PLANET (PlanetName, Masse, Durchmesser, Dichte, Aphel, Periphel, Planetensystem_ID)
VALUES ('Merkur', 30000, 15.00, 5.51, 1.017, 0.983 , 1);
INSERT INTO PLANET (PlanetName, Masse, Durchmesser, Dichte, Aphel, Periphel, Planetensystem_ID)
VALUES ('Mars', 40000, 12.741, 5.51, 1.017, 0.983 , 1);

-- UPDATE eines Planeten
UPDATE PLANET SET MASSE = 5 WHERE PLANETNAME = 'Erde';
UPDATE PLANET SET MASSE = 60000 WHERE PLANETNAME = 'Mars';


-- DELETE eines Planeten

DELETE FROM PLANET WHERE PLANETNAME = 'Merkur';
DELETE FROM PLANET WHERE PLANETNAME = 'Mars';


-- SELECT Anweisung nach INSERT, UPDATE, DELET
-- die Masse erhˆht sich nach Inserts oder Updates
-- die Masse wird weniger nach Deletes oder Updates
SELECT * FROM PLANETENSYSTEM;

-- Test der Triggers tr_newDichte
-- Nach einem UPDATE eines Planetens bei ver‰nderter Masse oder ver‰ndertem Durchmesser
-- wird die Dichte des Planten neu berechnet

-- SELECT Anweisung vor dem auslˆsen des Triggers
SELECT * FROM PLANET;

-- UPDATE des Durchmessers eines Planeten
UPDATE PLANET SET DURCHMESSER = 20 WHERE PLANETNAME = 'Saturn';
UPDATE PLANET SET DURCHMESSER = 12 WHERE PLANETNAME = 'Merkur';

-- Test der Triggers tr_newDichte

-- UPDATE der Masse eines Planeten
UPDATE PLANET SET MASSE = 6000000 WHERE PLANETNAME = 'Erde';
UPDATE PLANET SET MASSE = 7000000 WHERE PLANETNAME = 'Mars';

-- SELECT Anweisung nach auslˆsen des Triggers
-- Die Dichte wurde neu berechent
SELECT * FROM PLANET;


-- Test f¸r myTrigger10
-- nach einem INSERT eines neuen Planetensysteme, wird der Trigger ausgelˆst, es wird die Gesamte Masse
-- aller Planetensysteme berechnet.

-- SELECT Anweisung vor auslˆsen des Triggers
SELECT * FROM P_STATS;

-- INSERT eines neuen Planetensystems
INSERT INTO PLANETENSYSTEM (PlanetensystemName, AnzahlDerPlaneten, Masse)
VALUES ('Cerberus', 0, 388343);

-- SELECT Anweisung nach hinzuf¸gen eines neunen Plantensystems, die Anzahl der Plantensysteme und deren totalen Masse
-- aller Planetensysteme wurde neu berechnet
SELECT  * FROM p_stats;


-- Test der Funktion fk_Umlaufbahn
-- Die Funktion fk_Umlaufbahn gibt entweder 1 oder 0 aus, je nach dem ob die vorhanden Planeten Kreisfˆrmig sind oder nicht
SELECT fk_Umlaufbahn(PLANET_ID) Umlaufbahn FROM PLANET;

-- Test der Funktion fk_SternInfo
-- Die Funktion fk_SternInfo gibt Information wie Name, Helligkeit, Bayer und Leuchtkraft der vorhanden Stern aus
SELECT fk_SternInfo(Stern_ID) SternInfo FROM Stern;

-- Test der Funktion fk_HabitableZone
-- Die Funktion fk_HabitableZone, gibt uns aus ob auf den vorhanden Planeten leben mˆglich ist oder nicht
SELECT fk_HabitableZone(PLANET_ID) Habitable FROM PLANET;
