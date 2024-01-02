import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import onpremise from "../assets/onpremise.webp";
import cloud from "../assets/cloud.webp";
import { Link } from "react-router-dom";
import styles from "./ProductCard.module.css";

const ProductCard = () => {
  return (
    <div>
      <Link to="/survey-cloud-1">
        <Card className={styles.cards} sx={{ maxWidth: 340 }}>
          <CardActionArea>
            <CardMedia component="img" src={cloud} alt="avaya cloud" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Telefonia w chmurze
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Telefonia w chmurze dla Twojej firmy.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Link>
      <Link to="/survey-onpremise-1">
        <Card className={styles.cards} sx={{ maxWidth: 340 }}>
          <CardActionArea>
            <CardMedia component="img" src={onpremise} alt="IP onpremise" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Telefonia on premise
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Telefonia on premise dla Twojej firmy.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Link>
    </div>
  );
};

export default ProductCard;
