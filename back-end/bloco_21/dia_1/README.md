# DIA 21.1 :rocket:

O objetivo dos exercícios desse dia foi colocar em prática o que havia aprendido sobre as principais funções de SQL.

Os requisitos do exercício são:


1. Escreva uma query que exiba o maior salário da tabela.
  * Minha resolução: 
  ```SQL
SELECT 
    MAX(SALARY) AS 'maior salário'
FROM
    hr.employees;
```
  
2. Escreva uma query que exiba a diferença entre o maior e o menor salário.
  * Minha resolução: 
   ```SQL
SELECT 
    (MAX(SALARY) - MIN(SALARY)) AS 'diferença do maior para o menor salário'
FROM
    hr.employees;
```
  
3. Escreva uma query que exiba a média salarial de cada `JOB_ID` , ordenando pela média salarial em ordem decrescente.
  * Minha resolução: 
  ```SQL
SELECT 
    JOB_ID, AVG(SALARY) AS 'Média de salário'
FROM
    hr.employees
GROUP BY JOB_ID
ORDER BY `Média de salário` DESC;
```
  
4. Escreva uma query que exiba a quantidade de dinheiro necessária para realizar o pagamento de todas as pessoas funcionárias.
  * Minha resolução: 
  ```SQL
SELECT 
    SUM(SALARY) AS 'Dinheiro necessário para pagar todos os funcionários'
FROM
    hr.employees;
```
  
5. Escreva uma query que exiba quatro informações: o maior salário, o menor salário, a soma de todos os salários e a média dos salários. Todos os valores devem ser formatados para ter apenas duas casas decimais.
  * Minha resolução: 
  ```SQL
SELECT 
    ROUND(MAX(SALARY), 2) AS 'MAIOR SALÁRIO',
    ROUND(MIN(SALARY), 2) AS 'MENOR SALÁRIO',
    ROUND(SUM(SALARY), 2) AS 'SOMA DOS SALÁRIOS',
    ROUND(AVG(SALARY), 2) AS 'MÉDIA DOS SALÁRIOS'
FROM
    hr.employees;
```
  
6. Escreva uma query que exiba a quantidade de pessoas que trabalham como pessoas programadoras ( `IT_PROG` ).
  * Minha resolução: 
  ```SQL
SELECT 
    JOB_ID, COUNT(*) AS 'Número de funcionários'
FROM
    hr.employees
GROUP BY JOB_ID
HAVING JOB_ID = 'IT_PROG';
```
  
7. Escreva uma query que exiba a quantidade de dinheiro necessária para efetuar o pagamento de cada profissão ( `JOB_ID` ).
  * Minha resolução: 
  ```SQL
SELECT 
    JOB_ID, SUM(SALARY) AS 'Soma dos salários'
FROM
    hr.employees
GROUP BY JOB_ID;
```
  
8. Utilizando a query anterior, faça as alterações para que seja exibido somente a quantidade de dinheiro necessária para cobrir a folha de pagamento das pessoas programadoras ( `IT_PROG` ).
  * Minha resolução: 
  ```SQL
SELECT 
    JOB_ID, SUM(SALARY) AS 'Soma dos salários'
FROM
    hr.employees
GROUP BY JOB_ID
HAVING JOB_ID = 'IT_PROG';
```
  
9. Escreva uma query que exiba em ordem decrescente a média salarial de todos os cargos, exceto das pessoas programadoras ( `IT_PROG` ).
  * Minha resolução: 
  ```SQL
SELECT 
    JOB_ID, AVG(SALARY) AS 'Média dos salários'
FROM
    hr.employees
GROUP BY JOB_ID
HAVING JOB_ID <> 'IT_PROG'
ORDER BY `Média dos Salários` DESC;
```
  
10. Escreva um query que exiba média salarial e o número de funcionários de todos os departamentos com mais de dez funcionários. Dica: agrupe pelo `department_id` .
  * Minha resolução: 
  ```SQL
SELECT 
    DEPARTMENT_ID,
    ROUND(AVG(SALARY), 2) AS 'Média salarial',
    COUNT(*) AS 'N° de Funcionários'
FROM
    hr.employees
GROUP BY DEPARTMENT_ID
HAVING `N° de Funcionários` > 10;
```
  
11. Escreva uma query que atualize a coluna `PHONE_NUMBER` , de modo que todos os telefones iniciados por 515 agora devem iniciar com 777 .
  * Minha resolução: 
  ```SQL
SET SQL_SAFE_UPDATES = 0;

UPDATE hr.employees 
SET 
    PHONE_NUMBER = REPLACE(PHONE_NUMBER, '515', '777');
```
  
12. Escreva uma query que só exiba as informações dos funcionários cujo o primeiro nome tenha oito ou mais caracteres.
  * Minha resolução: 
  ```SQL
SELECT 
    *
FROM
    hr.employees
WHERE
    LENGTH(FIRST_NAME) >= 8;
```
  
13. Escreva uma query que exiba as seguintes informações de cada funcionário: id , primeiro nome e ano no qual foi contratado (exiba somente o ano).
  * Minha resolução: 
  ```SQL
SELECT 
    EMPLOYEE_ID,
    FIRST_NAME,
    LAST_NAME,
    YEAR(HIRE_DATE) AS 'HIRE YEAR'
FROM
    hr.employees;
```
  
14. Escreva uma query que exiba as seguintes informações de cada funcionário: id , primeiro nome e dia do mês no qual foi contratado (exiba somente o dia).
  * Minha resolução: 
  ```SQL
SELECT 
    EMPLOYEE_ID,
    FIRST_NAME,
    LAST_NAME,
    DAY(HIRE_DATE) AS 'HIRE DAY'
FROM
    hr.employees;
```
  
15. Escreva uma query que exiba as seguintes informações de cada funcionário: id , primeiro nome e mês no qual foi contratado (exiba somente o mês).
  * Minha resolução: 
  ```SQL
SELECT 
    EMPLOYEE_ID,
    FIRST_NAME,
    LAST_NAME,
    MONTH(HIRE_DATE) AS 'HIRE MONTH'
FROM
    hr.employees;
```
16. Escreva uma query que exiba os nomes dos funcionários em letra maiúscula.
  * Minha resolução: 
  ```SQL
SELECT 
    UCASE(FIRST_NAME)
FROM
    hr.employees;
```
17. Escreva uma query que exiba o sobrenome e a data de contratação de todos os funcionário contratados em julho de 1987.
  * Minha resolução: 
  ```SQL
SELECT 
    LAST_NAME, HIRE_DATE
FROM
    hr.employees
WHERE
    YEAR(HIRE_DATE) = 1987
        AND MONTH(HIRE_DATE) = 7;
```
18. Escreva uma query que exiba as seguintes informações de cada funcionário: nome , sobrenome , tempo que trabalha na empresa (em dias) .
  * Minha resolução: 
  ```SQL
SELECT 
    FIRST_NAME,
    LAST_NAME,
    DATEDIFF(CURRENT_DATE(), HIRE_DATE) AS 'Tempo na empresa em dias'
FROM
    hr.employees;
```
  
