ALTER TABLE "meio_pagamento"
ADD COLUMN "exige_comprovante" BOOLEAN NOT NULL DEFAULT false;

ALTER TABLE "campanha"
ADD CONSTRAINT "campanha_dt_fim_gte_dt_inicio"
CHECK ("dt_fim" >= "dt_inicio");

CREATE UNIQUE INDEX "campanha_opcoes_unique_resultado_final_por_campanha"
ON "campanha_opcoes" ("campanha_id")
WHERE "eh_resultado_final" = true;
