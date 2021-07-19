# DIA 20.2 :rocket:

O objetivo dos exercícios desse dia foi colocar em prática o que havia aprendido sobre queries em SQL.

Os requisitos do exercício são:


1. Escreva uma query para exibir a string "This is SQL Exercise, Practice and Solution".
  * Minha resolução: 
  ```SQL
SELECT 'This is SQL Exercise, Practice and Solution';
```
  
2. Escreva uma query para exibir três números em três colunas.
  * Minha resolução: 
   ```SQL
SELECT 1 AS one, 2 AS two, 3 AS three;
```
  
3. Escreva uma query para exibir a soma dos números 10 e 15.
  * Minha resolução: 
  ```SQL
SELECT 10 + 15;
```
  
4. Escreva uma query para exibir o resultado de uma expressão aritmética qualquer.
  * Minha resolução: 
  ```SQL
SELECT 329 / 34;
```
  
5. Escreva uma query para exibir todas as informações de todos os cientistas.
  * Minha resolução: 
  ```SQL
SELECT * FROM Scientists.Scientists;
```
  
6. Escreva uma query para exibir o nome como "Nome do Projeto" e as horas como "Tempo de Trabalho" de cada projeto.
  * Minha resolução: 
  ```SQL
SELECT name AS 'Nome do Projeto', hours AS 'Tempo de trabalho' FROM Scientists.Projects;
```
  
7. Escreva uma query para exibir o nome dos cientistas em ordem alfabética.
  * Minha resolução: 
  ```SQL
SELECT name FROM Scientists.Scientists ORDER BY name ASC;
```
  
8. Escreva uma query para exibir o nome dos Projetos em ordem alfabética descendente.
  * Minha resolução: 
  ```SQL
SELECT name FROM Scientists.Projects ORDER BY name ASC;
```
  
9. Escreva uma query que exiba a string "O projeto Name precisou de Hours horas para ser concluído." para cada projeto.
  * Minha resolução: 
  ```SQL
SELECT CONCAT ('O projeto ', name, ' precisou de ', hours, ' horas para ser concluído.') AS 'Tempo de projeto' FROM Scientists.Projects;
```
  
10. Escreva uma query para exibir o nome e as horas dos três projetos com a maior quantidade de horas.
  * Minha resolução: 
  ```SQL
SELECT name, hours FROM Scientists.Projects ORDER BY hours DESC LIMIT 3;
```
  
11. Escreva uma query para exibir o código de todos os projetos da tabela AssignedTo sem que haja repetições.
  * Minha resolução: 
  ```SQL
SELECT DISTINCT scientist FROM Scientists.AssignedTo;
```
  
12. Escreva uma query para exibir o nome do projeto com maior quantidade de horas.
  * Minha resolução: 
  ```SQL
SELECT name FROM Scientists.Projects ORDER BY hours DESC LIMIT 1;
```
  
13. Escreva uma query para exibir o nome do segundo projeto com menor quantidade de horas.
  * Minha resolução: 
  ```SQL
SELECT name FROM Scientists.Projects ORDER BY hours ASC LIMIT 1 OFFSET 1;
```
  
14. Escreva uma query para exibir todas as informações dos cinco projetos com a menor quantidade de horas.
  * Minha resolução: 
  ```SQL
SELECT * FROM Scientists.Projects ORDER BY hours ASC LIMIT 5;
```
  
15. Escreva uma query que exiba a string "Existem Number cientistas na tabela Scientists.", em que Number se refira a quantidade de cientistas.
  * Minha resolução: 
  ```SQL
SELECT CONCAT('Existem ', COUNT(name), ' cientistas na tabeLa Scientists') FROM Scientists.Scientists
```
  
