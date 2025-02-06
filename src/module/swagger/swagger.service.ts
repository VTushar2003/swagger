import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import axios from 'axios';
import { DefaultAstrologicalData as BirthDetails } from './dto/astrodata';

@Injectable()
export class SwaggerService {
  private API_URL: string;
  private USER_ID: string | undefined;
  private API_KEY: string | undefined;
  private LANGUAGE: string;

  constructor() {
    this.API_URL = 'https://json.astrologyapi.com/v1/';
    this.USER_ID = process.env.USER_ID; // Access from process.env
    this.API_KEY = process.env.API_KEY; // Access from process.env
    this.LANGUAGE = process.env.LANGUAGE || 'en'; // Default language if not set
  }
  // Helper function to make API requests
  private async fetchAstrologyData(
    api: string,
    data: BirthDetails,
  ): Promise<any> {
    const authHeader =
      'Basic ' +
      Buffer.from(`${this.USER_ID}:${this.API_KEY}`).toString('base64');
    try {
      const response = await axios.post(`${this.API_URL}${api}`, data, {
        headers: {
          authorization: authHeader,
          'Content-Type': 'application/json',
          'Accept-Language': this.LANGUAGE,
        },
      });
      return response.data; // Return the response data
    } catch (error) {
      throw new HttpException(
        error.response?.data || 'Failed to fetch astrology data',
        error.response?.status || HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  // Method to get Birth Details
  async getBirthDetails(data: BirthDetails): Promise<any> {
    return await this.fetchAstrologyData('birth_details', data);
  }

  // Method to get Astro Details
  async getAstroDetails(data: BirthDetails): Promise<any> {
    return await this.fetchAstrologyData('astro_details', data);
  }

  // Method to get Planets Details
  async getPlanetsDetails(data: BirthDetails): Promise<any> {
    return await this.fetchAstrologyData('planets', data);
  }

  // Method to get Planets Extended Details
  async getPlanetsExtendedDetails(data: BirthDetails): Promise<any> {
    return await this.fetchAstrologyData('planets/extended', data);
  }

  // Method to get Bhav Madhya Details
  async getBhavMadhyaDetails(data: BirthDetails): Promise<any> {
    return await this.fetchAstrologyData('bhav_madhya', data);
  }

  // Method to get Ghat Chakra Details
  async getGhatChakraDetails(data: BirthDetails): Promise<any> {
    return await this.fetchAstrologyData('ghat_chakra', data);
  }

  // Method to get Ayanamsha Details
  async getAyanamshaDetails(data: BirthDetails): Promise<any> {
    return await this.fetchAstrologyData('ayanamsha', data);
  }

  // Method to get Current Vdasha
  async getCurrentVdashaAll(data: BirthDetails): Promise<any> {
    return await this.fetchAstrologyData('current_vdasha_all', data);
  }
  // Method to get Current Vdasha
  async getCurrentVdasha(data: BirthDetails): Promise<any> {
    return await this.fetchAstrologyData('current_vdasha', data);
  }

  // Method to get Major Vdasha
  async getMajorVdasha(data: BirthDetails): Promise<any> {
    return await this.fetchAstrologyData('major_vdasha', data);
  }

  // Method to get Sub Vdasha // @param{dasha} is Get Antar dasha by major dasha
  async getSubVdasha(data: BirthDetails, dasha: string): Promise<any> {
    return await this.fetchAstrologyData(`sub_vdasha/${dasha}`, data);
  }

  // Method to get Sub Sub Vdasha
  async getSubSubVdasha(
    data: BirthDetails,
    PratyantarDasha: string,
    antarDasha: string,
  ): Promise<any> {
    return await this.fetchAstrologyData(
      `sub_sub_vdasha/${PratyantarDasha}/${antarDasha}`,
      data,
    );
  }

  // Method to get Sub Sub Sub Vdasha
  async getSubSubSubVdasha(
    data: BirthDetails,
    Sookshmadashabymajor: string,
    antarDasha: string,
    pratyantarDasha: string,
  ): Promise<any> {
    return await this.fetchAstrologyData(
      `sub_sub_sub_vdasha/${Sookshmadashabymajor}/${antarDasha}/${pratyantarDasha}`,
      data,
    );
  }

  // Method to get Sub Sub Sub Sub Vdasha
  async getSubSubSubSubVdasha(
    data: BirthDetails,
    Prandashabymajor: string,
    antarDasha: string,
    pratyantaDasha: string,
    sookshmaDasha: string,
  ): Promise<any> {
    return await this.fetchAstrologyData(
      `sub_sub_sub_sub_vdasha/${Prandashabymajor}/${antarDasha}/${pratyantaDasha}/${sookshmaDasha}`,
      data,
    );
  }

  async KpPlanet(data: BirthDetails) {
    return await this.fetchAstrologyData(`kp_planets`, data);
  }
  async kp_house_cusps(data: BirthDetails) {
    return await this.fetchAstrologyData(`kp_house_cusps`, data);
  }
  async kp_birth_chart(data: BirthDetails) {
    return await this.fetchAstrologyData(`kp_birth_chart`, data);
  }
  async kp_house_significator(data: BirthDetails) {
    return await this.fetchAstrologyData(`kp_house_significator`, data);
  }
  async kp_planet_significator(data: BirthDetails) {
    return await this.fetchAstrologyData(`kp_planet_significator`, data);
  }
}
