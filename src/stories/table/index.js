import { storiesOf } from '@storybook/vue';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import kucTable from '../../components/Table';
import TableCell from '../../components/TableCell';
import TableRow from '../../components/TableRow';
import KucText from '../../components/Text';
import DropDown from '../../components/Dropdown';

const insertRowEvent = action('insert-row');
const removeRowEvent = action('remove-row');
const stories = storiesOf('Table', module);
stories.addDecorator(withKnobs);
stories.add('As a component', () => ({
    components: {
        kucTable,
        TableCell,
        TableRow,
        KucText,
        DropDown,
    },
    props: {
        actionButtonShown: {
            default: boolean('actionButtonShown', true),
        },
    },
    methods: {
        changeFontSize(id, newVal) {
            const idIndex = this.data.findIndex(
                d => d.id === id
            );
            if (idIndex < 0) {
                return;
            }

            const valueIndex = this.fontSizeOptions.findIndex(
                f => f.value === newVal.value
            );
            if (valueIndex < 0) {
                return;
            }

            this.data[idIndex].fontSize = newVal.value;
        },
        insertRow(id) {
            insertRowEvent(id);
            const insertAt = this.data.findIndex(
                v => v.id === id
            );
            if (insertAt < 0) {
                return;
            }
            const before = this.data.slice(0, insertAt);
            const after = this.data.slice(
                insertAt,
                this.data.length
            );
            const newData = {
                id: `table-${Math.random()}`,
                fontColor: '#123123',
                bgColor: '#ABCABC',
                fontSize: '3',
            };
            this.data = before
                .concat(newData)
                .concat(after);
        },
        removeRow(id) {
            removeRowEvent(id);
            const removeAt = this.data.findIndex(
                v => v.id === id
            );
            if (removeAt < 0) {
                return;
            }
            this.data = this.data.filter(v => v.id !== id);
        },
    },
    data() {
        return {
            header: [
                'Font Color',
                'Background Color',
                'Font Size',
            ],
            fontSizeOptions: [
                {
                    key: 'font-size-large',
                    label: 'Large',
                    value: '1',
                },
                {
                    key: 'font-size-midium',
                    label: 'Midium',
                    value: '2',
                },
                {
                    key: 'font-size-small',
                    label: 'Small',
                    value: '3',
                },
            ],
            data: [
                {
                    id: 'table-1',
                    fontColor: '#000000',
                    bgColor: '#FFFFFF',
                    fontSize: '1',
                },
                {
                    id: 'table-2',
                    fontColor: '#000000',
                    bgColor: '#FFFFFF',
                    fontSize: '2',
                },
                {
                    id: 'table-3',
                    fontColor: '#000000',
                    bgColor: '#FFFFFF',
                    fontSize: '3',
                },
            ],
        };
    },
    template: `
        <kucTable 
            :header="header"
            :data="data"
            :actionButtonShown="actionButtonShown"
            @insert-row="id => insertRow(id)"
            @remove-row="id => removeRow(id)"
        >
            <template v-slot="{row}">
                <TableCell>
                    <KucText v-model="row.fontColor" />
                </TableCell>
                <TableCell>
                    <KucText v-model="row.bgColor" />
                </TableCell>
                <TableCell>
                    <DropDown 
                        :value="row.fontSize" 
                        :items="fontSizeOptions"
                        @change="newVal => changeFontSize(row.id, newVal)"
                    />
                </TableCell>
            </template>
        </kucTable>`,
}));
