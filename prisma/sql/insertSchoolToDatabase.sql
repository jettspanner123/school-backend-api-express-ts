INSERT INTO "School" (id, name, address, longitude, latitude)
VALUES (gen_random_uuid(), $1, $2, $3, $4) RETURNING *;
