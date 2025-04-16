CREATE TABLE Ideas (
    id INT IDENTITY(1,1) PRIMARY KEY,
    title NVARCHAR(255) NOT NULL,
    description NVARCHAR(MAX) NOT NULL,
    departments NVARCHAR(500),
    created_at DATETIME DEFAULT GETDATE()
);
