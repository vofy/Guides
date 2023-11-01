# `Architecture`
## Struktura `when-else`
- Nelze použít ve strutktuře `process`

```vhdl
<výstupní vektor> <= <vstupní signál nebo hodnota> when <podmínka 1> else
                     <vstupní signál nebo hodnota> when <podmínka 2> else
                     <...>
                     (others => '0'); -- vynuluje vektor
```

## Process
- `<citlivostní seznam>` - signály jenž se používají v podmínkách
- `<návěští>` - název procesu (NEPOVINNÉ)

```vhdl
<návěští> : process (<citlivostní seznam>)
begin
<...>
end process;
```

### Struktura `if-then-else`
- Nelze použít mimo `process`

```vhdl
if <condition> then
  <...>
elsif <condition> then
  <...>
else
  <...>
end if;
```
