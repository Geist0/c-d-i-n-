
// On initialise la latitude et la longitude de Paris (centre de la carte)
var lat = 48.852969;
var lon = 2.349903;
var macarte = null;

var villes = {
	"Paris": { "lat": 48.852969, "lon": 2.349903 },
	"Calais": { "lat": 50.9488, "lon": 1.87468 },
	"Lille": { "lat": 50.6305089, "lon": 3.0706414 },
  "Lens": { "lat": 50.4291723, "lon": 2.8319805 },
  "Le Havre": { "lat": 49.4938975, "lon": 0.1079732 },
  "Caen": { "lat": 49.1828008, "lon": -0.3690815 },
  "Laval": { "lat": 48.0710377, "lon": -0.7723499 },
  "lannion": { "lat": 48.7322183, "lon": -3.4587994 },
  "Vannes": { "lat": 47.658236, "lon": -2.760847 },
  "Nantes":{ "lat": 47.218371, "lon": -1.553621 },
  "La Rochelle": { "lat": 46.160329, "lon": -1.151139 },
  "Bordeaux": { "lat": 44.837789, "lon": -0.579180 },
  "Limoges": { "lat": 45.833619, "lon": 1.261105 },
  "Blagnac": { "lat": 43.635087, "lon": 1.397030 },
  "Bayonne": { "lat": 43.492949, "lon": -1.474841 },
  "Toulouse": { "lat":43.604652, "lon": 1.444209 },
  "Le Puy": { "lat": 45.042768, "lon": 3.882936 },
  "Rodez": { "lat": 44.349389, "lon": 2.575986 },
  "Montpellier": { "lat": 43.610769, "lon": 3.876716 },
  "Arles": { "lat": 43.676647, "lon": 4.627777 },
  "Nice": { "lat": 43.710173, "lon": 7.261953 },
  "Aix en Provence": { "lat": 43.529742, "lon": 5.447427 },
  "Valence": { "lat": 44.933393, "lon": 4.892360 },
  "Grenoble": { "lat": 45.188529, "lon": 5.724524 },
  "Annecy": { "lat": 45.899247, "lon": 6.129384 },
  "Lyon": { "lat": 45.764043, "lon": 4.835659 },
  "Clermont-Ferrand": { "lat": 45.777222, "lon": 3.087025 },
  "Bourg en Bresse": { "lat": 46.205167, "lon": 5.225501 },
  "Dijon": { "lat": 47.322047, "lon": 5.041480 },
  "Belfort": { "lat": 47.639674, "lon": 6.863849 },
  "Strasbourg": { "lat": 48.573405, "lon": 7.752111 },
  "St Dié": { "lat":48.287468, "lon":6.947767 },
  "Metz": { "lat": 49.119309, "lon":6.175716 },
  "Reims": { "lat": 49.258329, "lon": 4.031696 },
  "Maubeuge": { "lat": 50.280228, "lon": 3.967400 },
  "Amiens": { "lat": 49.894067, "lon": 2.295753 },
  "Orléans": { "lat": 47.902964, "lon": 1.909251 },
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
               	