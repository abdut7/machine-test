

CREATE TABLE  tbl_book
(
    id BIGSERIAL NOT NULL,
    "strName" VARCHAR(200)  NOT NULL,
    "intPrice" REAL,
    "strAutherName" VARCHAR(200) DEFAULT '',
    "strDescription" TEXT DEFAULT '',
    "createdTime" timestamp with time zone DEFAULT now()
    PRIMARY KEY (id)
);

-- Index:  tbl_book_strName_ukey
CREATE UNIQUE INDEX tbl_book_strname_ukey ON tbl_book USING btree ("strName")
WHERE  "chrStatus" = 'N' ;
