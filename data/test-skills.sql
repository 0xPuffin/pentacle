SELECT s.skill_id,
       s.title AS skill_title,
       s.text  AS skill_text,
    REPLACE(s.text, '\\n', '\n')
FROM skill s
    WHERE s.text IS NOT NULL