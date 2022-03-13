
INSERT INTO tbl_config("type","jsnDetails") 
VALUES (
       'aws',
        '{"AWS_BUCKET_URL":"https://swizbay.s3.ap-south-1.amazonaws.com/",
        "AWS_ACCESS_KEY_ID":"AKIA444CFGVCGYF5RXPC",
        "AWS_SECRET_ACCESS_KEY":"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",
        "AWS_S3_LOCATION":"ap-south-1",
        "AWS_S3_MASTER_BUCKET":"swizbay"}'
);


INSERT INTO tbl_course(
       id,"strCourseName", "intTotalLevels", "fkMentorId", "intCoursePrice", "strCurrencyCode", "imgUrl", "createdBy", "createdTime", "jsnDetails")
VALUES(1,'BASICS OF TRADING', 10, 2, 100, 'USD', 'https://www.thebalance.com/thmb/2oVVxpU0t0ACcVwJca_1NQBoFNc=/1500x1000/filters:fill(auto,1)/Primary_Images-46374ee07d1d460890f8410e26c36fdf.jpg', 1, now(),
       '{"Rating":4,"Level":"Basic","Duration":"2h:30m","Updated":"Jul 6,2021"}');

INSERT INTO "tbl_package"(
       id,
       "strName",
       "intPrice",
       "strCurrencyCode",
       "intValidityDays",
       "fkCourseId",
       "intWalletAmount",
       "jsnDetails",
       "createdBy",
       "createdTime")
VALUES(1,'ADMIN', 0, 'USD', -1, 1, 0, NULL, 1, now()),
       (2,'V1', 200, 'USD', 365, 1, 100, NULL, 1, now());



INSERT INTO "tbl_user"
       (   id,
              "strUserName",
              "strPassword",
              "strMobile",
              "strEmail",
              "strFirstName",
              "strUserType",
              "fkReferalById",
              "fkPackageId",
              "chrStatus",
              "createdBy",
              "createdTime"
       ) VALUES(1,'admin',
              '$2b$10$zw0DvEnvqALJixlf197ifu4P0yNyRmafeCEbn7Fb9ZMYf9YHs7azK',
              '9605322308',
              'abdurahmant7@gmail.com',
              'Abdu',
              'ADMIN',
              1,
              1,
              'N',
              1, now());

INSERT INTO "tbl_roe"
       ("roe",
              "createdBy",
              "createdTime"
       ) VALUES(75.5,
              1, now());

