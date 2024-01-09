import { Body, Controller, Post, Get, Param } from '@nestjs/common';
import { RolesService } from './roles.service';
import { CreateRoleDto } from './dto/create-role.dto';

@Controller('roles')
export class RolesController {
    constructor(private roleSerivce: RolesService){}

    @Post()
    create(@Body() roleDto: CreateRoleDto) {
        return this.roleSerivce.createRole(roleDto);
    }

    @Get()
    getAll() {
        return this.roleSerivce.getRoles();
    }

    @Get('/:value')
    getByValue(@Param('value') value: string) {
        return this.roleSerivce.getRoleByValue(value);
    }
}
