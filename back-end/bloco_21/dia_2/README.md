# Dia 20.2 :rocket:

Created: July 27, 2021 12:26 PM

1. Utilizando o `INNER JOIN` , encontre as vendas nacionais ( `domestic_sales` ) e internacionais ( `international_sales` ) de cada filme.
    - Minha resolução:

    ```sql
    SELECT 
        m.title, b.domestic_sales, b.international_sales
    FROM
        Pixar.Movies AS m
            INNER JOIN
        Pixar.BoxOffice AS b ON m.id = b.movie_id;
    ```

2. Utilizando o `INNER JOIN` , faça uma busca que retorne o número de vendas para cada filme que possui um número maior de vendas internacionais ( `international_sales` ) do que vendas nacionais ( `domestic_sales` ).
    - Minha resolução:

    ```sql
    SELECT 
        m.title, b.domestic_sales, b.international_sales
    FROM
        Pixar.Movies AS m
            INNER JOIN
        Pixar.BoxOffice AS b ON m.id = b.movie_id
    WHERE
        b.international_sales > b.domestic_sales;
    ```

3. Utilizando o `INNER JOIN` , faça uma busca que retorne os filmes e sua avaliação ( `rating` ) em ordem decrescente.
    - Minha resolução:

    ```sql
    SELECT 
        m.title, b.rating
    FROM
        Pixar.Movies AS m
            INNER JOIN
        Pixar.BoxOffice AS b ON m.id = b.movie_id
    ORDER BY b.rating DESC;
    ```

4. Utilizando o `LEFT JOIN` , faça uma busca que retorne todos os dados dos cinemas, mesmo os que não possuem filmes em cartaz e, adicionalmente, os dados dos filmes que estão em cartaz nestes cinemas. Retorne os nomes dos cinemas em ordem alfabética.
    - Minha resolução:

    ```sql
    SELECT 
        *
    FROM
        Pixar.Theater AS t
            LEFT JOIN
        Pixar.Movies AS m ON t.id = m.theater_id
    ORDER BY t.name ASC;
    ```

5. Utilizando o `RIGHT JOIN` , faça uma busca que retorne todos os dados dos filmes, mesmo os que não estão em cartaz e, adicionalmente, os dados dos cinemas que possuem estes filmes em cartaz. Retorne os nomes dos cinemas em ordem alfabética.
    - Minha resolução:

    ```sql
    SELECT 
        *
    FROM
        Pixar.Theater AS t
            RIGHT JOIN
        Pixar.Movies AS m ON t.id = m.theater_id
    ORDER BY t.name ASC;
    ```

6. Faça duas buscas, uma utilizando `SUBQUERY` e outra utilizando `INNER JOIN` , que retornem os títulos dos filmes que possuem avaliação maior que 7.5.
    - Minha resolução:

    ```sql
    -- Usando uma Subquery:
    SELECT 
        title
    FROM
        Pixar.Movies
    WHERE
        id IN (SELECT 
                movie_id
            FROM
                Pixar.BoxOffice
            WHERE
                rating > 7.5);
    -- Usando um Inner Join:
    SELECT 
    m.title
    FROM
        Pixar.Movies AS m
            INNER JOIN
        Pixar.BoxOffice AS b ON m.id = b.movie_id
    WHERE
        b.rating > 7.5;
    ```

7. Faça duas buscas, uma utilizando `SUBQUERY` e outra utilizando `INNER JOIN` , que retornem as avaliações dos filmes lançados depois de 2009.
    - Minha resolução:

    ```sql
     -- Utilizando uma Subquery:
    SELECT 
        rating
    FROM
        Pixar.BoxOffice
    WHERE
        movie_id IN (SELECT 
                id
            FROM
                Pixar.Movies
            WHERE
                year > 2009);
    -- Utilizando um INNER JOIN
    SELECT 
    b.rating
    FROM
        Pixar.BoxOffice AS b
            INNER JOIN
        Pixar.Movies AS m ON b.movie_id = m.id
    WHERE
        m.year > 2009;
    ```

8. Utilizando o `EXISTS` , selecione o nome e localização dos cinemas que possuem filmes em cartaz.
    - Minha resolução:

    ```sql
    SELECT 
    `name`, location
    FROM
        Pixar.Theater AS t
    WHERE
        EXISTS( SELECT 
                *
            FROM
                Pixar.Movies
            WHERE
                t.id = Movies.theater_id);
    ```

9. Utilizando o `EXISTS` , selecione o nome e localização dos cinemas que não possuem filmes em cartaz.
    - Minha resolução:

    ```sql
    SELECT 
    `name`, location
    FROM
        Pixar.Theater AS t
    WHERE
        NOT EXISTS( SELECT 
                *
            FROM
                Pixar.Movies
            WHERE
                t.id = Movies.theater_id);
    ```
## Bônus
10. Utilizando o `INNER JOIN` , selecione todas as informações dos filmes com avaliação maior que 8.
    - Minha resolução:

    ```sql
    SELECT 
    *
    FROM
        Pixar.Movies AS m
            INNER JOIN
        Pixar.BoxOffice AS b ON m.id = b.movie_id
    WHERE
        b.rating > 8;
    ```

11. Utilizando o `SELF JOIN` , selecione os títulos e duração dos filmes que possuem o mesmo diretor.
    - Minha resolução:

    ```sql
    SELECT 
    m1.title, m1.length_minutes
    FROM
        Pixar.Movies AS m1,
        Pixar.Movies AS m2
    WHERE
        m1.director = m2.director;
    ```

12. Faça duas buscas, uma utilizando `SUBQUERY` e outra utilizando `INNER JOIN` , que retornem o título dos filmes que arrecadaram 500 milhões ou mais, e que possuem duração maior que 110 minutos.
    - Minha resolução:

    ```sql
    -- Utilizando uma Subquery:
    SELECT 
        title
    FROM
        Pixar.Movies
    WHERE
        id IN (SELECT 
                movie_id
            FROM
                Pixar.BoxOffice
            WHERE
                (domestic_sales + international_sales) > 500000000)
            AND length_minutes > 110;
    -- Utilizando um INNER JOIN:
    SELECT 
    m.title
    FROM
        Pixar.Movies AS m
            INNER JOIN
        Pixar.BoxOffice AS b ON m.id = b.movie_id
    WHERE
        (b.domestic_sales + b.international_sales) > 500000000
            AND m.length_minutes > 110;
    ```