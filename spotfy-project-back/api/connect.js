import { MongoClient} from 'mongodb'

const URI = "mongodb+srv://dbUser:409834@cluster0.hmgdc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const client = new MongoClient(URI);

export const db = client.db('spotifyProject');

