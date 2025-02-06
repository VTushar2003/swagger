import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SwaggerService } from './swagger.service';
import {
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { DefaultAstrologicalData as BirthDetails } from './dto/astrodata';
import {
  AstroDetailsExample,
  AyanamshaDetailsExample,
  BhavaDetailsExample,
  BirthDetailsExample,
  currentdasha,
  DashaPeriodsExample,
  HouseSignificatorsResponseExample,
  kp_birth_chartresponseExample,
  KphouseDetailsExample,
  KpplanetDetailsExample,
  majorDashaPeriod,
  PanchangDetailsExample,
  PlanetDetailsExample,
  PlanetSignificatorsDataResponseExample,
  sub_sub_sub_sub_VdashaDetailsExample,
  sub_sub_sub_VdashaDetailsExample,
  Sub_Sub_VdashaDetailsExample,
  subVdashaDetails,
} from './dto/defaultdata';

@ApiTags('Astrology Api')
@Controller('astrology')
export class SwaggerController {
  constructor(private readonly swaggerService: SwaggerService) {}

  @Post('birth-details')
  @ApiOperation({
    summary: 'Fetch birth details based on provided astrological data',
  })
  @ApiBody({ type: BirthDetails })
  @ApiResponse({
    status: 201,
    description: 'Successfully fetched birth details',
    examples: {
      value: BirthDetailsExample,
    }, // Use the external example data
  })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  @ApiResponse({ status: 500, description: 'Internal Server Error' })
  async getBirthDetails(@Body() data: BirthDetails) {
    return this.swaggerService.getBirthDetails(data);
  }

  // Endpoint for astro details

  @Post('astro-details')
  @ApiOperation({
    summary: 'Fetch astrological details based on birth details',
  })
  @ApiBody({ type: BirthDetails })
  @ApiResponse({
    status: 201,
    description: 'Successfully fetched birth details',
    examples: {
      value: AstroDetailsExample,
    },
  })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  @ApiResponse({ status: 500, description: 'Internal Server Error' })
  async getAstroDetails(@Body() data: BirthDetails) {
    return this.swaggerService.getAstroDetails(data);
  }

  // Endpoint for planets details

  @Post('planets-details')
  @ApiOperation({
    summary: 'Fetch planets details based on birth details',
  })
  @ApiBody({ type: BirthDetails })
  @ApiResponse({
    status: 201,
    description: 'Successfully fetched planets details',
    examples: { value: PlanetDetailsExample },
  })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  @ApiResponse({ status: 500, description: 'Internal Server Error' })
  async getPlanetsDetails(@Body() data: BirthDetails) {
    return this.swaggerService.getPlanetsDetails(data);
  }

  // Endpoint for fetching extended planet details
  @Post('planets/extended')
  @ApiOperation({
    summary: 'Fetch extended planet details based on birth details',
  })
  @ApiBody({ type: BirthDetails })
  @ApiResponse({
    status: 201,
    description: 'Successfully fetched extended planet details',
    examples: {
      value: PlanetDetailsExample, // Use a relevant example here if needed
    },
  })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  @ApiResponse({ status: 500, description: 'Internal Server Error' })
  async getPlanetsExtendedDetails(@Body() data: BirthDetails) {
    return this.swaggerService.getPlanetsExtendedDetails(data);
  }

  // Endpoint for fetching Bhav Madhya details
  @Post('bhav_madhya')
  @ApiOperation({
    summary: 'Fetch Bhav Madhya details based on birth details',
  })
  @ApiBody({ type: BirthDetails })
  @ApiResponse({
    status: 201,
    description: 'Successfully fetched Bhav Madhya details',
    examples: {
      value: BhavaDetailsExample, // Use relevant example here
    },
  })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  @ApiResponse({ status: 500, description: 'Internal Server Error' })
  async getBhavMadhyaDetails(@Body() data: BirthDetails) {
    return this.swaggerService.getBhavMadhyaDetails(data);
  }

  // Endpoint for fetching Ghat Chakra details
  @Post('ghat_chakra')
  @ApiOperation({
    summary: 'Fetch Ghat Chakra details based on birth details',
  })
  @ApiBody({ type: BirthDetails })
  @ApiResponse({
    status: 201,
    description: 'Successfully fetched Ghat Chakra details',
    examples: {
      value: PanchangDetailsExample, // Use relevant example here
    },
  })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  @ApiResponse({ status: 500, description: 'Internal Server Error' })
  async getGhatChakraDetails(@Body() data: BirthDetails) {
    return this.swaggerService.getGhatChakraDetails(data);
  }

  // Endpoint for fetching Ayanamsha details
  @Post('ayanamsha')
  @ApiOperation({
    summary: 'Fetch Ayanamsha details based on birth details',
  })
  @ApiBody({ type: BirthDetails })
  @ApiResponse({
    status: 201,
    description: 'Successfully fetched Ayanamsha details',
    examples: {
      value: AyanamshaDetailsExample, // Use relevant example here
    },
  })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  @ApiResponse({ status: 500, description: 'Internal Server Error' })
  async getAyanamshaDetails(@Body() data: BirthDetails) {
    return this.swaggerService.getAyanamshaDetails(data);
  }
  // Endpoint for current Vdasha

  @Post('current-vdasha_all')
  @ApiOperation({
    summary: 'Fetch current Vdasha all details based on birth details',
  })
  @ApiBody({ type: BirthDetails })
  @ApiResponse({
    status: 201,
    description: 'Successfully fetched current Vdasha all details',
    examples: {
      value: DashaPeriodsExample, // Use relevant example here
    },
  })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  @ApiResponse({ status: 500, description: 'Internal Server Error' })
  async getCurrentVdashaAll(@Body() data: BirthDetails) {
    return this.swaggerService.getCurrentVdashaAll(data);
  }
  // Endpoint for current Vdasha

  @Post('current-vdasha')
  @ApiOperation({
    summary: 'Fetch current Vdasha details based on birth details',
  })
  @ApiBody({ type: BirthDetails })
  @ApiResponse({
    status: 200,
    description: 'Successfully fetched current Vdasha details',
    examples: {
      value: currentdasha, // Use relevant example here
    },
  })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  @ApiResponse({ status: 500, description: 'Internal Server Error' })
  async getCurrentVdasha(@Body() data: BirthDetails) {
    return this.swaggerService.getCurrentVdasha(data);
  }

  // Endpoint for major Vdasha
  @Post('major-vdasha')
  @ApiOperation({
    summary: 'Fetch major Vdasha details based on birth details',
  })
  @ApiBody({ type: BirthDetails })
  @ApiResponse({
    status: 201,
    description: 'Successfully fetched major Vdasha details',
    examples: {
      value: majorDashaPeriod, // Use relevant example here
    },
  })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  @ApiResponse({ status: 500, description: 'Internal Server Error' })
  async getMajorVdasha(@Body() data: BirthDetails) {
    return this.swaggerService.getMajorVdasha(data);
  }

  // Endpoint for Sub Vdasha
  @Post('sub-vdasha/:dasha')
  @ApiOperation({
    summary:
      'Fetch sub Vdasha details by major dasha example :sun , moon etc but enter only one not more than that',
  })
  @ApiParam({
    schema: {
      description: 'Major Dasha value',
      default: 'sun',
    },
    name: 'dasha',
    type: String,
  })
  @ApiBody({ type: BirthDetails })
  @ApiResponse({
    status: 201,
    description: 'Successfully fetched sub Vdasha details',
    examples: {
      value: subVdashaDetails,
    },
  })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  @ApiResponse({ status: 500, description: 'Internal Server Error' })
  async getSubVdasha(
    @Body() data: BirthDetails,
    @Param('dasha') dasha: string,
  ) {
    return this.swaggerService.getSubVdasha(data, dasha);
  }

  // Endpoint for Sub Sub Vdasha
  @Post('sub-sub-vdasha/:PratyantarDasha/:antarDasha')
  @ApiOperation({
    summary: 'Fetch sub sub Vdasha details by PratyantarDasha and AntarDasha',
  })
  @ApiParam({
    name: 'PratyantarDasha',
    schema: {
      description: 'Pratyantar Dasha value',
      default: 'sun',
    },
    type: String,
  })
  @ApiParam({
    name: 'antarDasha',
    schema: {
      description: 'Antar Dasha value',
      default: 'moon',
    },
    type: String,
  })
  @ApiBody({ type: BirthDetails })
  @ApiResponse({
    status: 201,
    description: 'Successfully fetched sub sub Vdasha details',
    examples: {
      value: Sub_Sub_VdashaDetailsExample,
    },
  })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  @ApiResponse({ status: 500, description: 'Internal Server Error' })
  async getSubSubVdasha(
    @Body() data: BirthDetails,
    @Param('PratyantarDasha') PratyantarDasha: string,
    @Param('antarDasha') antarDasha: string,
  ) {
    return this.swaggerService.getSubSubVdasha(
      data,
      PratyantarDasha,
      antarDasha,
    );
  }

  // Endpoint for Sub Sub Sub Vdasha
  @Post('sub-sub-sub-vdasha/:Sookshmadashabymajor/:antarDasha/:pratyantarDasha')
  @ApiOperation({
    summary:
      'Fetch sub sub sub Vdasha details by Sookshmadasha, AntarDasha, and PratyantarDasha',
  })
  @ApiParam({
    name: 'Sookshmadashabymajor',
    schema: {
      description: 'Sookshmadasha by Major Dasha',
      default: 'sun',
    },
    type: String,
  })
  @ApiParam({
    name: 'antarDasha',
    schema: {
      description: 'Antar Dasha value',
      default: 'sun',
    },
    type: String,
  })
  @ApiParam({
    name: 'pratyantarDasha',
    schema: {
      description: 'Pratyantar Dasha value',
      default: 'sun',
    },
    type: String,
  })
  @ApiBody({ type: BirthDetails })
  @ApiResponse({
    status: 201,
    description: 'Successfully fetched sub sub sub Vdasha details',
    examples: {
      value: sub_sub_sub_VdashaDetailsExample,
    },
  })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  @ApiResponse({ status: 500, description: 'Internal Server Error' })
  async getSubSubSubVdasha(
    @Body() data: BirthDetails,
    @Param('Sookshmadashabymajor') Sookshmadashabymajor: string,
    @Param('antarDasha') antarDasha: string,
    @Param('pratyantarDasha') pratyantarDasha: string,
  ) {
    return this.swaggerService.getSubSubSubVdasha(
      data,
      Sookshmadashabymajor,
      antarDasha,
      pratyantarDasha,
    );
  }

  // Endpoint for Sub Sub Sub Sub Vdasha
  @Post(
    'sub-sub-sub-sub-vdasha/:Prandashabymajor/:antarDasha/:pratyantaDasha/:sookshmaDasha',
  )
  @ApiOperation({
    summary:
      'Fetch sub sub sub sub Vdasha details by Prandasha, Antar Dasha, Pratyanta Dasha, and Sookshma Dasha',
  })
  @ApiParam({
    name: 'Prandashabymajor',
    schema: {
      description: 'Prandasha by Major Dasha',
      default: 'moon',
    },
    type: String,
  })
  @ApiParam({
    name: 'antarDasha',
    schema: {
      description: 'Antar Dasha value',
      default: 'sun',
    },
    type: String,
  })
  @ApiParam({
    name: 'pratyantaDasha',
    schema: {
      description: 'Pratyanta Dasha value',
      default: 'mars',
    },
    type: String,
  })
  @ApiParam({
    name: 'sookshmaDasha',
    schema: {
      description: 'Sookshma Dasha value',
      default: 'mercury',
    },
    type: String,
  })
  @ApiBody({ type: BirthDetails })
  @ApiResponse({
    status: 201,
    description: 'Successfully fetched sub sub sub sub Vdasha details',
    examples: {
      value: sub_sub_sub_sub_VdashaDetailsExample,
    },
  })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  @ApiResponse({ status: 500, description: 'Internal Server Error' })
  async getSubSubSubSubVdasha(
    @Body() data: BirthDetails,
    @Param('Prandashabymajor') Prandashabymajor: string,
    @Param('antarDasha') antarDasha: string,
    @Param('pratyantaDasha') pratyantaDasha: string,
    @Param('sookshmaDasha') sookshmaDasha: string,
  ) {
    return this.swaggerService.getSubSubSubSubVdasha(
      data,
      Prandashabymajor,
      antarDasha,
      pratyantaDasha,
      sookshmaDasha,
    );
  }

  //kp planet astro apis

  @Post('kp-planets')
  @ApiOperation({
    summary: 'Fetch KP planets data based on provided astrological data',
  })
  @ApiBody({ type: BirthDetails })
  @ApiResponse({
    status: 201,
    description: 'Successfully fetched KP planets data',
    examples: {
      value: KpplanetDetailsExample,
    },
  })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  @ApiResponse({ status: 500, description: 'Internal Server Error' })
  async getKpPlanets(@Body() data: BirthDetails) {
    return this.swaggerService.KpPlanet(data);
  }

  @Post('kp-house-cusps')
  @ApiOperation({
    summary: 'Fetch KP house cusps data based on provided astrological data',
  })
  @ApiBody({ type: BirthDetails })
  @ApiResponse({
    status: 201,
    description: 'Successfully fetched KP house cusps data',
    examples: {
      value: KphouseDetailsExample,
    },
  })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  @ApiResponse({ status: 500, description: 'Internal Server Error' })
  async getKpHouseCusps(@Body() data: BirthDetails) {
    return this.swaggerService.kp_house_cusps(data);
  }

  @Post('kp-birth-chart')
  @ApiOperation({
    summary: 'Fetch KP birth chart data based on provided astrological data',
  })
  @ApiBody({ type: BirthDetails })
  @ApiResponse({
    status: 201,
    description: 'Successfully fetched KP birth chart data',
    examples: {
      value: kp_birth_chartresponseExample,
    },
  })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  @ApiResponse({ status: 500, description: 'Internal Server Error' })
  async getKpBirthChart(@Body() data: BirthDetails) {
    return this.swaggerService.kp_birth_chart(data);
  }

  @Post('kp-house-significator')
  @ApiOperation({
    summary:
      'Fetch KP house significator data based on provided astrological data',
  })
  @ApiBody({ type: BirthDetails })
  @ApiResponse({
    status: 201,
    description: 'Successfully fetched KP house significator data',
    examples: {
      value: HouseSignificatorsResponseExample,
    },
  })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  @ApiResponse({ status: 500, description: 'Internal Server Error' })
  async getKpHouseSignificator(@Body() data: BirthDetails) {
    return this.swaggerService.kp_house_significator(data);
  }

  @Post('kp-planet-significator')
  @ApiOperation({
    summary:
      'Fetch KP planet significator data based on provided astrological data',
    description: 'Custom description for the birth details endpoint',
  })
  @ApiBody({ type: BirthDetails })
  @ApiResponse({
    status: 201,
    description: 'Successfully fetched KP planet significator data',
    examples: {
      value: PlanetSignificatorsDataResponseExample,
    },
  })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  @ApiResponse({ status: 500, description: 'Internal Server Error' })
  async getKpPlanetSignificator(@Body() data: BirthDetails) {
    return this.swaggerService.kp_planet_significator(data);
  }
}
