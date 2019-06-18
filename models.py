from app import db

class Company(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    login = db.Column(db.String, unique=True, nullable=False)
    email = db.Column(db.String, index=True, unique=True)
    password_hash = db.Column(db.String)
    company_name = db.Column(db.String, index=True, nullable=False)
    company_full_name = db.Column(db.String)

    def __repr__(self):
        return '<Company {}>'.format(self.company_name)