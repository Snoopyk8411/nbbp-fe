import ReactDOM from 'react-dom';
import cn from 'classnames';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { renderToString } from 'react-dom/server';
import { YMaps, Map, Clusterer, Placemark, YMapsApi } from 'react-yandex-maps';

import {
  getCoords,
  getNearest,
  readCoordsFromLocalStorage,
  saveCoordsToLocalStorage,
} from 'tools/geolocation/geolocation';
import { GeoBalloon } from 'components/geo-balloon/geo-balloon';
import { ICoords } from 'tools/types/geolocation-types';
import GeoIcon from 'assets/geo.svg';
import { setGeo, setIsGeoOpen } from 'store/shop/slice';
import { selectGeo, selectIsGeoOpen } from 'store/shop/selectors';
import { GEO_POINTS, INITIAL_MAP_STATE, NO_LOCATION_TAG, YMAP_CONFIG } from './constants';
import geoStyles from './geo-widget.module.css';

export const GeoWidget = (): JSX.Element => {
  const [ymaps, setYmaps] = useState<YMapsApi>();
  const dropDownStyles = geoStyles.open || '';

  const dispatch = useDispatch();
  const location = useSelector(selectGeo);
  const isDropDownOpen = useSelector(selectIsGeoOpen);

  const updateLocation = useCallback((coords: ICoords): void => {
    const nearest = getNearest(coords, GEO_POINTS);
    if (nearest) {
      saveCoordsToLocalStorage(nearest.coords);
      dispatch(setGeo(nearest));
    }
    dispatch(setIsGeoOpen(false));
  }, []);

  useEffect(() => {
    const coords = readCoordsFromLocalStorage();
    if (coords) {
      updateLocation(coords);
    } else {
      const handleSuccess: PositionCallback = pos => {
        const coords = getCoords(pos);
        updateLocation(coords);
      };
      const handleError: PositionErrorCallback = err => {
        console.error(err.message);
      };
      navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
    }
  }, []);

  const toggleDropdown = useCallback(() => {
    dispatch(setIsGeoOpen(true));
  }, []);

  return (
    <div className={cn(geoStyles.geo, { [dropDownStyles]: isDropDownOpen })}>
      <button className={geoStyles.geo__toggle} onClick={toggleDropdown} type='button'>
        <GeoIcon />
        <span className={geoStyles.geo__value}>{location?.tag || NO_LOCATION_TAG}</span>
      </button>
      <div className={geoStyles.geo__dropdown}>
        <YMaps query={{ lang: YMAP_CONFIG.LANG, load: YMAP_CONFIG.PACKAGE }}>
          <Map
            defaultState={INITIAL_MAP_STATE}
            width={'100%'}
            height={'100%'}
            onLoad={(ymaps): void => setYmaps(ymaps)}
          >
            <Clusterer
              options={{
                preset: YMAP_CONFIG.CLUSTERER_PRESET,
                groupByCoordinates: false,
                balloonPanelMaxMapArea: Infinity,
              }}
            >
              {ymaps &&
                GEO_POINTS.map(point => (
                  <Placemark
                    modules={[YMAP_CONFIG.MODULE_BALLOON, YMAP_CONFIG.MODULE_HINT]}
                    key={point.id}
                    geometry={point.coords}
                    onBalloonOpen={(): void => {
                      ReactDOM.hydrate(
                        <GeoBalloon point={point} handleSelect={(): void => updateLocation(point.coords)} />,
                        document.getElementById('balloon'),
                      );
                    }}
                    properties={{
                      hintContent: point.title,
                      balloonContent: `<div id="balloon">${renderToString(
                        <GeoBalloon point={point} handleSelect={(): void => updateLocation(point.coords)} />,
                      )}</div>`,
                    }}
                  />
                ))}
            </Clusterer>
          </Map>
        </YMaps>
      </div>
    </div>
  );
};
