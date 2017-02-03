SELECT 
	xx.pointofsale AS `Point de vente`, 
	EXTRACT(MONTH FROM xx.create) AS `Mois`, 
	EXTRACT(DAY FROM xx.create) AS `Jour`, 
	xx.identity AS `Designation`, 
	xx.sku AS `Reference`, 
	xx.qte AS `Quantite`, 
	xx.transaction AS `Transaction`, 
	(SELECT identity FROM otr_module_store_supplier WHERE id=p.supplier) AS `Fournisseur`,
	(SELECT identity FROM otr_module_store_mark WHERE id=p.mark) AS `Marque`,
	REPLACE(s.purchase,'.',',') AS `Prix achat HT`,
	REPLACE(xx.ht,'.',',') AS `Prix vente HT`,
	REPLACE(xx.ttc,'.',',') AS `Prix vente TTC`,
	REPLACE(xx.tva,'.',',') AS `Tva`,
	(SELECT identity FROM otr_module_checkout_compta_mr WHERE id=xx.mr) AS `Mode de reglement`, 
	a.firstname AS `Prenom`, 
	a.lastname AS `Nom`, 
	a.mail AS `Email`, 
	xx.billing_address AS `Adresse`, 
	xx.billing_cp AS `Code postal`, 
	xx.billing_city AS `Ville`, 
	xx.billing_country AS `Pays`, 
	IF(a.profil LIKE '23 %' OR a.profil LIKE '% 23 %' OR a.profil LIKE '% 23',
		(SELECT GROUP_CONCAT(CONCAT(p1.identity,':',p2.identity)) 
			FROM otr_account_profil p1 
			LEFT JOIN otr_account_profil p2 ON p2.pid=p1.id 
			WHERE p1.pid=23 
			AND a.profil_data LIKE CONCAT(p2.id, ' %') 
			OR a.profil_data LIKE CONCAT('% ', p2.id, ' %') 
			OR a.profil_data LIKE CONCAT('% ', p2.id) 
			ORDER BY p2.pid
		),''
	) AS `Profil enseignant`,
	IF(a.profil LIKE '29 %' OR a.profil LIKE '% 29 %' OR a.profil LIKE '% 29',
		(SELECT GROUP_CONCAT(CONCAT(p1.identity,':',p2.identity)) 
			FROM otr_account_profil p1 
			LEFT JOIN otr_account_profil p2 ON p2.pid=p1.id 
			WHERE p1.pid=29 
			AND a.profil_data LIKE CONCAT(p2.id, ' %') 
			OR a.profil_data LIKE CONCAT('% ', p2.id, ' %') 
			OR a.profil_data LIKE CONCAT('% ', p2.id) 
			ORDER BY p2.pid 
		),''
	) AS `Profil association`,
	IF(a.profil LIKE '38 %' OR a.profil LIKE '% 38 %' OR a.profil LIKE '% 38',
		(SELECT GROUP_CONCAT(CONCAT(p1.identity,':',p2.identity)) 
			FROM otr_account_profil p1 
			LEFT JOIN otr_account_profil p2 ON p2.pid=p1.id 
			WHERE p1.pid=38 
			AND a.profil_data LIKE CONCAT(p2.id, ' %') 
			OR a.profil_data LIKE CONCAT('% ', p2.id, ' %') 
			OR a.profil_data LIKE CONCAT('% ', p2.id) 
			ORDER BY p2.pid
		) ,''
	) AS `Profil professionel`,
	IF(a.profil LIKE '41 %' OR a.profil LIKE '% 41 %' OR a.profil LIKE '% 41',
		(SELECT GROUP_CONCAT(CONCAT(p1.identity,':',p2.identity)) 
			FROM otr_account_profil p1 
			LEFT JOIN otr_account_profil p2 ON p2.pid=p1.id 
			WHERE p1.pid=41 
			AND a.profil_data LIKE CONCAT(p2.id, ' %') 
			OR a.profil_data LIKE CONCAT('% ', p2.id, ' %') 
			OR a.profil_data LIKE CONCAT('% ', p2.id) 
			ORDER BY p2.pid
		),''
	) AS `Profil partenaire`, 
	IF(a.profil LIKE '49 %' OR a.profil LIKE '% 49 %' OR a.profil LIKE '% 49',
		(SELECT GROUP_CONCAT(CONCAT(p1.identity,':',p2.identity)) 
			FROM otr_account_profil p1
			LEFT JOIN otr_account_profil p2 ON p2.pid=p1.id
			WHERE p1.pid=49 
			AND a.profil_data LIKE CONCAT(p2.id, ' %') 
			OR a.profil_data LIKE CONCAT('% ', p2.id, ' %') 
			OR a.profil_data LIKE CONCAT('% ', p2.id) 
			ORDER BY p2.pid
		) ,''
	) AS `Profil particulier`,
	IF(a.profil LIKE '295 %' OR a.profil LIKE '% 295 %' OR a.profil LIKE '% 295',
		(SELECT GROUP_CONCAT(CONCAT(p1.identity,':',p2.identity)) 
			FROM otr_account_profil p1 
			LEFT JOIN otr_account_profil p2 ON p2.pid=p1.id 
			WHERE p1.pid=295 
			AND a.profil_data LIKE CONCAT(p2.id, ' %') 
			OR a.profil_data LIKE CONCAT('% ', p2.id, ' %') 
			OR a.profil_data LIKE CONCAT('% ', p2.id) ORDER BY p2.pid
		) ,''
	) AS `Profil guides`,
	IF(a.profil LIKE '648 %' OR a.profil LIKE '% 648 %' OR a.profil LIKE '% 648', 
		(SELECT GROUP_CONCAT(CONCAT(p1.identity,':',p2.identity)) 
			FROM otr_account_profil p1 
			LEFT JOIN otr_account_profil p2 ON p2.pid=p1.id 
			WHERE p1.pid=648 
			AND a.profil_data LIKE CONCAT(p2.id, ' %') 
			OR a.profil_data LIKE CONCAT('% ', p2.id, ' %') 
			OR a.profil_data LIKE CONCAT('% ', p2.id) 
			ORDER BY p2.pid 
		) ,''
	) AS `Profil protocole` FROM 
	(
		SELECT 
			c.mr,
			c.account_id,
			c.pointofsale,
			c.create,
			ci.identity,
			ci.sku,
			COUNT(ci.id) AS `qte`,
			ci.transaction,
			ci.ht,
			ci.ttc,
			ci.tva,
			c.billing_address,
			c.billing_cp,
			c.billing_city,
			c.billing_country
			FROM otr_module_checkout_cmd c 
			LEFT JOIN otr_module_checkout_cmditem ci ON ci.transaction=c.transaction 
			WHERE c.account_id IS NOT NULL 
			AND ci.transaction IS NOT NULL 
			GROUP BY ci.sku,ci.transaction
		) xx 
		LEFT JOIN otr_module_store_product_sku s ON s.sku=xx.sku 
		LEFT JOIN otr_module_store_product p ON p.id=s.pid 
		LEFT JOIN otr_account a ON xx.account_id=a.id 
		WHERE EXTRACT(YEAR FROM xx.create)='{year}'