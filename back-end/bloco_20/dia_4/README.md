# DIA 20.4 :rocket:

O objetivo dos exercícios desse dia foi colocar em prática o que havia aprendido sobre inserção, atualização e deleção de dados de tabelas SQL, nos foi dado um banco de dados Pixar com algumas tabelas dentro.

Os requisitos do exercício são:


1.  Insira as produções da Pixar abaixo na tabela Movies :

    * Monstros SA, de Pete Docter, lançado em 2001, com 92 minutos de duração.

    * Procurando Nemo, de John Lasseter, lançado em 2003, com 107 minutos de duração.

    * Os Incríveis, de Brad Bird, lançado em 2004, com 116 minutos de duração.

    * WALL-E, de Pete Docter, lançada em 2008, com 104 minutos de duração. 

  * Minha resolução: 
  ```SQL
INSERT INTO Movies(title, director, `year`, length_minutes) VALUES 
('Monstros SA', 'Peter Docter', 2011, 92),
('Procurando Nemo', 'John Lasseter', 2003, 107),
('Os Incríveis', 'Brad Bird', 2004, 116),
('WALL-E', 'Pete Docter', 2008, 104);
```
  
2. Procurando Nemo foi aclamado pela crítica! Foi classificado em 6.8, fez 450 milhões no mercado interno e 370 milhões no mercado internacional. Adicione as informações à tabela BoxOffice .

  * Minha resolução: 
   ```SQL
INSERT INTO 
	BoxOffice(movie_id, rating, domestic_sales, international_sales) 
SELECT
	id, 6.8, 450000000, 370000000
FROM
	Movies
WHERE 
	title = 'Procurando Nemo';
```
  
3. O diretor do filme "Procurando Nemo" está incorreto, na verdade ele foi dirigido por Andrew Staton. Corrija esse dado utilizando o UPDATE .
  * Minha resolução: 
  ```SQL
UPDATE Movies 
SET 
    director = 'Andrew Staton'
WHERE
    title = 'Procurando Nemo' AND id = 9;
```
  
4. O título do filme "Ratatouille" esta escrito de forma incorreta na tabela Movies , além disso, o filme foi lançado em 2007 e não em 2010. Corrija esses dados utilizando o UPDATE .
  * Minha resolução: 
  ```SQL
UPDATE Movies 
SET 
    title = 'Ratatouille',
    `year` = 2007
WHERE
    id = 3;

SELECT * FROM Movies;
```
  
5.  Insira as novas classificações abaixo na tabela BoxOffice , lembre-se que a coluna movie_id é uma foreign key referente a coluna id da tabela Movies :
    * Monsters SA, classificado em 8.5, lucrou 300 milhões no mercado interno e 250 milhões no mercado internacional.
    * Os Incríveis, classificado em 7.4, lucrou 460 milhões no mercado interno e 510 milhões no mercado internacional.
    * WALL-E, classificado em 9.9, lucrou 290 milhões no mercado interno e 280 milhões no mercado internacional.
  * Minha resolução: 
  ```SQL
INSERT INTO BoxOffice(movie_id, rating, domestic_sales, international_sales)
SELECT 
	id, 8.5, 300000000, 250000000
FROM 
	Movies
WHERE 
	title = 'Monstros SA';
    
INSERT INTO BoxOffice(movie_id, rating, domestic_sales, international_sales)
SELECT 
	id, 7.4, 460000000, 510000000
FROM 
	Movies
WHERE 
	title = 'Os Incríveis';

INSERT INTO BoxOffice(movie_id, rating, domestic_sales, international_sales)
SELECT 
	id, 9.9, 290000000, 280000000
FROM 
	Movies
WHERE 
	title = 'WALL-E';
```
  
6. Exclua da tabela Movies o filme "WALL-E".
  * Minha resolução: 
  ```SQL
DELETE FROM BoxOffice 
WHERE
    movie_id = 11;

DELETE FROM Movies 
WHERE
    id = 11;
    
    SELECT * FROM Movies;
```
  
7. Exclua da tabela Movies todos os filmes dirigidos por "Andrew Staton".
  * Minha resolução: 
  ```SQL
SELECT 
    title, id
FROM
    Movies
WHERE
    director = 'Andrew Staton';

DELETE FROM BoxOffice 
WHERE
    movie_id IN (2 , 9);
    
DELETE FROM Movies 
WHERE
    id IN (2 , 9);
    
```
  
## Bônus
Para realizar os exercícios 8 a 10, faça os exercícios anteriores (1 a 7) e utilize o banco de dados Pixar .

8. Altere a classificação da tabela BoxOffice para 9.0 de todos os filmes que lucraram mais de 400 milhões no mercado interno.
    * Minha resolução: 
  ```SQL
SET SQL_SAFE_UPDATES = 0;

UPDATE BoxOffice 
SET 
    rating = 9
WHERE
    domestic_sales > 400000000;

SELECT * FROM BoxOffice ORDER BY domestic_sales;
    
```
9. Altere a classificação da tabela BoxOffice para 6.0 de todos os filmes que lucraram menos de 300 milhões no mercado internacional e mais de 200 milhões no mercado interno.
    * Minha resolução: 
  ```SQL
SET SQL_SAFE_UPDATES = 0;

UPDATE BoxOffice 
SET 
    rating = 6
WHERE
    international_sales < 300000000 AND domestic_sales > 200000000;
    
```
10. Exclua da tabela Movies todos os filmes com menos de 100 minutos de duração.
    * Minha resolução: 
  ```SQL
SET SQL_SAFE_UPDATES = 0;

SELECT 
    id, title
FROM
    Movies
WHERE
    length_minutes < 100;
    
DELETE FROM BoxOffice 
WHERE
    movie_id IN (1 , 6, 7, 8);

DELETE FROM Movies 
WHERE
    length_minutes < 100;
    
```