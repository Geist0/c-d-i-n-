
// On initialise la latitude et la longitude de Paris (centre de la carte)
var lat = 48.852969;
var lon = 2.349903;
var macarte = null;

var villes = {
	"Paris": { "lat": 48.852969, "lon": 2.349903 },
	"Calais": { "lat": 50.9488, "lon": 1.87468 },
	"Lille": { "lat": 50.6305089, "lon": 3.0706414 },
  "Lens": { "lat": 50.4291723, "lon": 2.8319805 },
  "Le havre": { "lat": 49.4938975, "lon": 0.1079732 },
  "Caen": { "lat": 49.1828008, "lon": -0.3690815 },
  "Laval": { "lat": 48.0710377, "lon": -0.7723499 },
  "lannion": { "lat": 48.7322183, "lon": -3.4587994 },
  "Paris": { "lat": 48.852969, "lon": 2.349903 },
  "Paris": { "lat": 48.852969, "lon": 2.349903 },
  "Paris": { "lat": 48.852969, "lon": 2.349903 },
  "Paris": { "lat": 48.852969, "lon": 2.349903 },
  "Paris": { "lat": 48.852969, "lon": 2.349903 },
  "Paris": { "lat": 48.852969, "lon": 2.349903 },
  "Paris": { "lat": 48.852969, "lon": 2.349903 },
  "Paris": { "lat": 48.852969, "lon": 2.349903 },
  "Paris": { "lat": 48.852969, "lon": 2.349903 },
  "Paris": { "lat": 48.852969, "lon": 2.349903 },
  "Paris": { "lat": 48.852969, "lon": 2.349903 },
  "Paris": { "lat": 48.852969, "lon": 2.349903 },
  "Paris": { "lat": 48.852969, "lon": 2.349903 },
  "Paris": { "lat": 48.852969, "lon": 2.349903 },
  "Paris": { "lat": 48.852969, "lon": 2.349903 },
  "Paris": { "lat": 48.852969, "lon": 2.349903 },
  "Paris": { "lat": 48.852969, "lon": 2.349903 },
  "Paris": { "lat": 48.852969, "lon": 2.349903 },
  "Paris": { "lat": 48.852969, "lon": 2.349903 },
  "Paris": { "lat": 48.852969, "lon": 2.349903 },
  "Paris": { "lat": 48.852969, "lon": 2.349903 },
  "Paris": { "lat": 48.852969, "lon": 2.349903 },
  "Paris": { "lat": 48.852969, "lon": 2.349903 },
  "Paris": { "lat": 48.852969, "lon": 2.349903 },
  "Paris": { "lat": 48.852969, "lon": 2.349903 },
  "Paris": { "lat": 48.852969, "lon": 2.349903 },
  "Paris": { "lat": 48.852969, "lon": 2.349903 },
  "Paris": { "lat": 48.852969, "lon": 2.349903 },
  "Paris": { "lat": 48.852969, "lon": 2.349903 },
  "Paris": { "lat": 48.852969, "lon": 2.349903 },
  "Paris": { "lat": 48.852969, "lon": 2.349903 },
  "Paris": { "lat": 48.852969, "lon": 2.349903 },
  "Paris": { "lat": 48.852969, "lon": 2.349903 },

};

// Fonction d'initialisation de la carte
function initMap() {
  var markers = [];
  // Créer l'objet "macarte" et l'insèrer dans l'élément HTML qui a l'ID "map"
          macarte = L.map('map').setView([lat, lon], 11);
          // Leaflet ne récupère pas les cartes (tiles) sur un serveur par défaut. Nous devons lui préciser où nous souhaitons les récupérer. Ici, openstreetmap.fr
          L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
              // Il est toujours bien de laisser le lien vers la source des données
              attribution: 'données © <a href="//osm.org/copyright">OpenStreetMap</a>/ODbL - rendu <a href="//openstreetmap.fr">OSM France</a>',
              minZoom: 1,
              maxZoom: 20
          }).addTo(macarte);
          for (ville in villes) {
            var marker = L.marker([villes[ville].lat, villes[ville].lon]).addTo(macarte);
            marker.bindPopup(ville);
            markers.push(marker);
          }
          var group = new L.featureGroup(markers); // Nous créons le groupe des marqueurs pour adapter le zoom
          macarte.fitBounds(group.getBounds().pad(0.5)); // Nous demandons à ce que tous les marqueurs soient visibles, et ajoutons un padding (pad(0.5)) pour que les marqueurs ne soient pas coupés               	
      }
window.onload = function(){
  // Fonction d'initialisation qui s'exécute lorsque le DOM est chargé
  initMap(); 
};
               	